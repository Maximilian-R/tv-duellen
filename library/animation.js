function setupEnterViewListeners() {
  const emojis = document.querySelectorAll(".emojis");
  observeEnterView(emojis, (target) => {
    target?.classList.add("enter");
  });

  const lis = document.querySelectorAll("ul > li");
  observeEnterView(lis, (target) => {
    const votes = target.querySelector(".votes");
    votes?.classList.add("enter");
  });
}

function observeEnterView(targets, onEnter) {
  const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;

        onEnter(target);
        observer.unobserve(target);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const observer = new IntersectionObserver(intersectionCallback, options);
  targets.forEach((target) => observer.observe(target));
}

setupEnterViewListeners();
