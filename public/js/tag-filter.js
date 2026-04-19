document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tag-btn");
  const posts = document.querySelectorAll(".post-entry");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const tag = button.getAttribute("data-tag");

      // active state
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      posts.forEach(post => {
        const tags = post.getAttribute("data-tags");

        if (tag === "all") {
          post.style.display = "block";
        } else if (tags && tags.split(",").map(t => t.trim()).includes(tag)) {
          post.style.display = "block";
        } else {
          post.style.display = "none";
        }
      });
    });
  });
});