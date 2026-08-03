document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".marginalia");
    if (!container) return;

    const sidenotes = document.querySelectorAll(".sn");

    let previousBottom = 0;

    sidenotes.forEach((sn, index) => {

        const number = index + 1;

        //
        // Update superscript
        //
        const marker = sn.querySelector(".sn-marker");
        marker.textContent = number;

        //
        // Build margin note
        //
        const note = document.createElement("aside");
        note.className = "margin-note";

        note.innerHTML = `
            <div class="margin-number">${number}</div>
            ${sn.querySelector(".sn-content").innerHTML}
        `;

        container.appendChild(note);

        //
        // Align vertically
        //
        const markerRect = marker.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        let top = markerRect.top - containerRect.top;

        //
        // Prevent overlap
        //
        top = Math.max(top, previousBottom);

        note.style.position = "absolute";
        note.style.top = `${top}px`;

        previousBottom = top + note.offsetHeight + 24;

    });

});