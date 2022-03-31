const elInstaList = document.querySelector('.insta__list');

let elposts = [];

for (let i = 0; i < objects.length; i++) {
    let li = document.createElement("li")
    li.className = "insta__item col-md-4";
    li.innerHTML = `
    
    <img src="${objects[i].media[0]}" alt="">
    <div class="insta__socials d-flex">
                            <div class="insta__itemSocials d-flex">
                                <i class='bx bx-heart'></i>
                                <p class="likes">${objects[i].likes}</p>
                            </div>
                            <div class="insta__itemSocials d-flex">
                                <i class='bx bx-message-rounded'></i>
                                <p class="comments">${objects[i].view}</p>
                            </div>
                        </div>
    `;

    elInstaList.appendChild(li);

    objects[i].media.forEach((el) => {
        if (el.includes("mp4")) {
            let elPlay = li.querySelector(".bx-heart");
            elPlay.className = "bx bx-play";
        }
    });
}