import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const db = createClient(
  "https://bhlvxyalldeaqrxnyfww.supabase.co",
  "sb_publishable_o7D_zPYMUS4dqV93b5HsYw_0tRUyPi9",
);

start();

function stop() {
  const voteButtons = document.querySelectorAll(".voting button");
  Array.from(voteButtons).forEach((button) => {
    button.remove();
  });
}

async function start() {
  const meta = {
    game: document.querySelector("meta[name='game']").content,
    year: document.querySelector("meta[name='year']").content,
    version: document.querySelector("meta[name='version']").content,
    primary: Number(document.querySelector("meta[name='primary']").content),
    secondary: Number(document.querySelector("meta[name='secondary']").content),
    locked: document.querySelector("meta[name='locked']").content === "true",
  };

  if (meta.locked) {
    stop();
    return;
  }

  const { data } = await db.auth.getUser();

  if (data.user) {
    console.log("Logged in");
  } else {
    console.log("Not logged in");
    stop();
    return;
  }

  const user = await getUser(data.user.id);
  const votes = await getUserVotes(user.id, meta);

  const primaryVotesDB = votes.filter((vote) => vote.primary);
  const secondaryVotesDB = votes.filter((vote) => !vote.primary);

  const primaryVotes = [...Array(meta.primary).keys()].map((index) => {
    const voteDB = primaryVotesDB?.[index];
    return {
      name: user.id,
      primary: true,
      target: voteDB?.contestant,
      id: voteDB?.id,
    };
  });

  const secondaryVotes = [...Array(meta.secondary).keys()].map((index) => {
    const voteDB = secondaryVotesDB?.[index];
    return {
      name: user.id,
      primary: false,
      target: voteDB?.contestant,
      id: voteDB?.id,
    };
  });

  createFloatingVotes([...primaryVotes, ...secondaryVotes]);
  const vibrate = createVibrate();

  function setupDrag() {
    const draggables = document.querySelectorAll(".draggable-box");
    const targets = document.querySelectorAll("[data-dialog-trigger]");
    let activeDrag = null;
    let offsetX = 0;
    let offsetY = 0;
    let snapTarget = null;

    document.addEventListener("touchend", vibrate);

    draggables.forEach((box) => {
      box.addEventListener("mousedown", startDrag);
      box.addEventListener("touchstart", startDrag, { passive: false });
    });

    function startDrag(e) {
      e.preventDefault();

      activeDrag = e.target;
      let clientX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
      let clientY = e.type === "mousedown" ? e.clientY : e.touches[0].clientY;

      const rect = activeDrag.getBoundingClientRect();
      offsetX = clientX - rect.left;
      offsetY = clientY - rect.top;

      document.body.appendChild(activeDrag);
      activeDrag.style.position = "absolute";
      activeDrag.style.zIndex = 1000;

      moveAt(clientX, clientY);

      document.addEventListener("mousemove", dragMove);
      document.addEventListener("mouseup", endDrag);
      document.addEventListener("touchmove", dragMove, { passive: false });
      document.addEventListener("touchend", endDrag);
    }

    function dragMove(e) {
      if (!activeDrag) return;
      e.preventDefault();

      let clientX = e.type.startsWith("mouse")
        ? e.clientX
        : e.touches[0].clientX;
      let clientY = e.type.startsWith("mouse")
        ? e.clientY
        : e.touches[0].clientY;

      moveAt(clientX, clientY);
      autoScroll(clientY);
      checkHoverSnap(clientX, clientY);
    }

    function moveAt(clientX, clientY) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      // Keep within page bounds
      const maxX = document.body.scrollWidth - activeDrag.offsetWidth;
      const maxY = document.body.scrollHeight - activeDrag.offsetHeight;
      let left = clientX - offsetX + scrollX;
      let top = clientY - offsetY + scrollY;

      left = Math.max(0, Math.min(left, maxX));
      top = Math.max(0, Math.min(top, maxY));

      activeDrag.style.left = left + "px";
      activeDrag.style.top = top + "px";
    }

    async function endDrag() {
      if (!activeDrag) return;

      document.removeEventListener("mousemove", dragMove);
      document.removeEventListener("touchmove", dragMove);
      document.removeEventListener("mouseup", endDrag);
      document.removeEventListener("touchend", endDrag);

      if (snapTarget) {
        snapToTarget(activeDrag, snapTarget);
        snapTarget.classList.remove("snap-hover");

        if (snapTarget.dataset.name !== activeDrag.dataset.contestant) {
          const data = await submitVote(
            user.id,
            meta,
            snapTarget.dataset.name,
            activeDrag.dataset.primary === "true",
            activeDrag.dataset.id,
          );
          if (data) {
            activeDrag.dataset.id = data[0].id;
            activeDrag.dataset.contestant = snapTarget.dataset.name;
          }
        }
      } else {
        if (activeDrag.dataset.contestant) {
          const targetElement = document.querySelector(
            `li[data-name="${activeDrag.dataset.contestant}"]`,
          );
          snapToTarget(activeDrag, targetElement);
        } else {
          const container = document.getElementById("floating-container");
          container.appendChild(activeDrag);
          activeDrag.style.position = "relative";
          activeDrag.style.left = "0";
          activeDrag.style.top = "0";
        }
      }

      activeDrag = null;
      snapTarget = null;
    }

    function checkHoverSnap(clientX, clientY) {
      snapTarget = null;
      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        if (
          clientX > rect.left &&
          clientX < rect.right &&
          clientY > rect.top &&
          clientY < rect.bottom
        ) {
          snapTarget = target;
          target.classList.add("snap-hover");
        } else {
          target.classList.remove("snap-hover");
        }
      });
    }

    function autoScroll(clientY) {
      const margin = 50;
      const speed = 10;
      const viewportHeight = window.innerHeight;

      if (clientY < margin) window.scrollBy(0, -speed);
      else if (clientY > viewportHeight - margin) window.scrollBy(0, speed);
    }
  }
  setupDrag();
}

async function getUser(id) {
  const { data, error } = await db.from("User").select("*").eq("user", id);
  if (error) {
    console.error(error);
  }
  return data[0];
}

async function getUserVotes(user, meta) {
  const { data, error } = await db
    .from("Votes")
    .select("*")
    .eq("game", meta.game)
    .eq("year", meta.year)
    .eq("version", meta.version)
    .eq("user", user);
  if (error) {
    console.error(error);
  }
  return data;
}

async function submitVote(user, meta, contestant, primary, id = undefined) {
  const obj = {
    game: meta.game,
    year: meta.year,
    version: meta.version,
    user: user,
    primary: primary,
    contestant: contestant,
    ...(id && { id }),
  };
  const { data, error } = await db.from("Votes").upsert(obj).select();
  if (error) {
    console.error(error);
  }
  return data;
}

function snapToTarget(drag, target) {
  target.appendChild(drag);
  const targetRect = target.getBoundingClientRect();

  drag.style.zIndex = 1000;
  drag.style.position = "absolute";
  drag.style.left = targetRect.width / 2 - drag.offsetWidth / 2 + "px";
  drag.style.top = targetRect.height / 2 - drag.offsetHeight + "px";
}

function createFloatingVotes(votes) {
  let container = document.getElementById("floating-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "floating-container";
    document.body.appendChild(container);
  } else {
    container.innerHTML = "";
  }

  votes.forEach((vote) => {
    const { id, name, primary, target } = vote;
    const child = document.createElement("div");
    child.className = "vote draggable-box";
    if (id) {
      child.dataset.id = id;
    }
    if (target) {
      child.dataset.contestant = target;
    }
    child.dataset.name = name;
    child.dataset.primary = primary;
    child.textContent = name;

    if (target) {
      const targetElement = document.querySelector(`li[data-name="${target}"]`);
      snapToTarget(child, targetElement);
    } else {
      container.appendChild(child);
    }
  });
}

function createVibrate() {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = "haptic-switch";
  input.setAttribute("switch", "");
  input.style.display = "none";
  document.body.appendChild(input);

  const label = document.createElement("label");
  label.htmlFor = "haptic-switch";
  label.style.display = "none";
  document.body.appendChild(label);

  return () => {
    label.click();
  };
}
