document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".leaves-container");
  if (!container) return;

  // 👇 List of leaf images
  const leafImages = [
    "/images/leaf.png",
    "/images/maple-leaf.png",
  ];

  for (let i = 0; i < 20; i++) {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");

    // 👇 Pick random leaf image
    const randomLeaf = leafImages[Math.floor(Math.random() * leafImages.length)];
    leaf.style.backgroundImage = `url(${randomLeaf})`;

    // 👇 Random position
    leaf.style.left = Math.random() * 100 + "vw";

    // 👇 Random speed
    leaf.style.animationDuration = (6 + Math.random() * 8) + "s";

    // 👇 Random delay (important for natural effect)
    leaf.style.animationDelay = Math.random() * 5 + "s";

    // 👇 Random size variation
    const size = 20 + Math.random() * 20;
    leaf.style.width = size + "px";
    leaf.style.height = size + "px";

    // 👇 Random opacity
    leaf.style.opacity = 0.4 + Math.random() * 0.6;

    container.appendChild(leaf);
  }
});