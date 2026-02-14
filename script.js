function enterSite() {
    document.querySelector('.hero').style.display = 'none';
    document.getElementById('letter').classList.remove('hidden');

    // Start music after interaction
    const music = document.getElementById('bgMusic');
    music.play().catch(() => {});
}

function accepted() {
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:#f6f1eb;
            font-family:'Playfair Display',serif;
            text-align:center;
            animation: fadeIn 2s ease;
        ">
            <h1>You just made me the happiest man alive.</h1>
            <p>And I promise to choose you. Every single day.</p>
        </div>
    `;
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function () {

    const proposalBox = document.querySelector(".proposal");
    const maxX = proposalBox.clientWidth - noBtn.offsetWidth;
    const maxY = proposalBox.clientHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
