document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("input");
  const headingText = document.querySelector("p");

  // Simple Entrance Animation using Web Animations API
  if (headingText) {
    headingText.style.opacity = 0;
    headingText.style.transform = "translateY(-20px)";
    headingText.animate(
      [
        { opacity: 0, transform: "translateY(-20px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      {
        duration: 800,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  }

  if (searchInput) {
    searchInput.style.opacity = 0;
    searchInput.style.transform = "translateY(20px)";
    searchInput.animate(
      [
        { opacity: 0, transform: "translateY(20px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      {
        duration: 800,
        delay: 200,
        easing: "ease-out",
        fill: "forwards"
      }
    );

    // Interactive search focus feedback
    searchInput.addEventListener("focus", () => {
      searchInput.setAttribute("placeholder", "Type a restaurant or dish...");
    });

    searchInput.addEventListener("blur", () => {
      searchInput.setAttribute("placeholder", "Search for restaurants, cuisine or a dish");
    });
  }
});
