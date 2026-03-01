import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const db = createClient(
  "https://bhlvxyalldeaqrxnyfww.supabase.co",
  "sb_publishable_o7D_zPYMUS4dqV93b5HsYw_0tRUyPi9",
);

const meta = {
  game: document.querySelector("meta[name='game']").content,
  year: document.querySelector("meta[name='year']").content,
  version: document.querySelector("meta[name='version']").content,
  primary: Number(document.querySelector("meta[name='primary']").content),
  secondary: Number(document.querySelector("meta[name='secondary']").content),
  locked: document.querySelector("meta[name='locked']").content === "true",
};

start();

async function start() {
  if (meta.locked) {
    return;
  }

  const { data: auth } = await db.auth.getUser();

  if (auth.user) {
    console.log("Logged in");
  } else {
    console.log("Not logged in");
    return;
  }

  const user = await getUser(auth.user.id);

  if (!user) {
    console.log("Logged in user has no user-data");
    return;
  }

  try {
    const votesDB = await getUserVotes(user.id, meta);
    const primaryVotes = createVotes(user.id, true, meta.primary, votesDB);
    const secondaryVotes = createVotes(user.id, false, meta.secondary, votesDB);

    createDraggableVotes([...primaryVotes, ...secondaryVotes]);

    setupDraggables();
  } catch (error) {
    console.error("Error setting up voting:", error);
  }
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
    throw error;
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
    return null;
  }
  return data;
}

function snapToContainer(vote) {
  const container = document.getElementById("voting-container");
  container.appendChild(vote);
  vote.style.position = "relative";
  vote.style.left = "0";
  vote.style.top = "0";
}

function snapToContestant(vote, contestant) {
  const element = document.querySelector(`li[data-contestant="${contestant}"]`);
  element.appendChild(vote);

  vote.style.zIndex = 1000;
  vote.style.position = "absolute";
  vote.style.left = `1rem`;
  vote.style.top = `1rem`;
}

function createVotes(user, primary, amount, votesDB) {
  const filteredVotes =
    votesDB?.filter((vote) => vote.primary === primary) || [];

  return [...Array(amount).keys()].map((index) => {
    const voteDB = filteredVotes[index];
    return {
      name: user,
      primary: primary,
      contestant: voteDB?.contestant,
      id: voteDB?.id,
    };
  });
}

function createDraggableVotes(votes) {
  const container = document.createElement("div");
  container.id = "voting-container";
  document.body.appendChild(container);

  votes.forEach((vote) => {
    const { id, name, primary, contestant } = vote;
    const child = document.createElement("div");
    child.className = "vote draggable";
    if (id) {
      child.dataset.id = id;
    }
    if (contestant) {
      child.dataset.contestant = contestant;
    }
    child.dataset.name = name;
    child.dataset.primary = primary;
    child.textContent = name;

    if (contestant) {
      snapToContestant(child, contestant);
    } else {
      container.appendChild(child);
    }
  });
}

function setupDraggables() {
  const draggables = document.querySelectorAll(".draggable");
  const targets = document.querySelectorAll("li[data-contestant]");
  let activeDrag = null;
  let snapTarget = null;
  let offsetX = 0;

  draggables.forEach((vote) => {
    vote.addEventListener("mousedown", startDrag);
    vote.addEventListener("touchstart", startDrag, { passive: false });
  });

  function startDrag(e) {
    e.preventDefault();
    offsetX = document.body.getBoundingClientRect().left;

    const vote = e.target;
    if (vote.classList.contains("saving")) {
      return;
    }

    activeDrag = vote;

    let clientX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
    let clientY = e.type === "mousedown" ? e.clientY : e.touches[0].clientY;

    document.body.appendChild(activeDrag);
    activeDrag.style.position = "absolute";
    moveAt(clientX, clientY);

    document.addEventListener("mousemove", dragMove);
    document.addEventListener("mouseup", endDrag);
    document.addEventListener("touchmove", dragMove, { passive: false });
    document.addEventListener("touchend", endDrag);
  }

  function dragMove(e) {
    if (!activeDrag) return;
    e.preventDefault();

    let clientX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
    let clientY = e.type === "mousemove" ? e.clientY : e.touches[0].clientY;

    moveAt(clientX, clientY);
    autoScroll(clientY);
    checkHoverSnap(clientX, clientY);
  }

  function moveAt(clientX, clientY) {
    clientX -= offsetX;

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    const maxX = document.body.scrollWidth - activeDrag.offsetWidth;
    const maxY = document.body.scrollHeight - activeDrag.offsetHeight;

    let left = clientX - activeDrag.offsetWidth / 2 + scrollX;
    let top = clientY - activeDrag.offsetHeight / 2 + scrollY;

    left = Math.max(0, Math.min(left, maxX));
    top = Math.max(0, Math.min(top, maxY));

    activeDrag.style.left = left + "px";
    activeDrag.style.top = top + "px";
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

  async function endDrag() {
    if (!activeDrag) return;

    document.removeEventListener("mousemove", dragMove);
    document.removeEventListener("touchmove", dragMove);
    document.removeEventListener("mouseup", endDrag);
    document.removeEventListener("touchend", endDrag);

    if (snapTarget) {
      snapToContestant(activeDrag, snapTarget.dataset.contestant);
      snapTarget.classList.remove("snap-hover");

      if (snapTarget.dataset.contestant !== activeDrag.dataset.contestant) {
        activeDrag.classList.add("saving");
        const data = await submitVote(
          activeDrag.dataset.name,
          meta,
          snapTarget.dataset.contestant,
          activeDrag.dataset.primary === "true",
          activeDrag.dataset.id,
        );
        activeDrag.classList.remove("saving");

        if (data) {
          activeDrag.dataset.id = data[0].id;
          activeDrag.dataset.contestant = snapTarget.dataset.contestant;
        } else {
          if (activeDrag.dataset.contestant) {
            snapToContestant(activeDrag, activeDrag.dataset.contestant);
          } else {
            snapToContainer(activeDrag);
          }
        }
      }
    } else {
      if (activeDrag.dataset.contestant) {
        snapToContestant(activeDrag, activeDrag.dataset.contestant);
      } else {
        snapToContainer(activeDrag);
      }
    }

    activeDrag = null;
    snapTarget = null;
  }

  function autoScroll(clientY) {
    const margin = 50;
    const speed = 10;
    const viewportHeight = window.innerHeight;

    if (clientY < margin) window.scrollBy(0, -speed);
    else if (clientY > viewportHeight - margin) window.scrollBy(0, speed);
  }
}

// Doesnt work on touchend when above a scroll threshold, ios only allows vibration to play if it was a pure touchend like a tap
// function createVibrate() {
//   const input = document.createElement("input");
//   input.type = "checkbox";
//   input.id = "haptic-switch";
//   input.setAttribute("switch", "");
//   input.style.display = "none";
//   document.body.appendChild(input);

//   const label = document.createElement("label");
//   label.htmlFor = "haptic-switch";
//   label.style.display = "none";
//   document.body.appendChild(label);
// }
