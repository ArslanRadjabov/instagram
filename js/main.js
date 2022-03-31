const elInstaList = document.querySelector('.insta__list');

let elposts = [];

for (let i = 0; i < objects.length; i++) {
    let li = document.createElement("li")
    li.className = "insta__item col-md-4";
    li.setAttribute("data-bs-toggle", "modal");
    li.setAttribute("data-bs-target", "#staticBackdrop");
    li.innerHTML = `
                        <img src="${objects[i].media[0]}" alt="">
                        <div class="insta__socials d-flex">
                            <div class="insta__itemSocials d-flex" >
                                <i class='bx bx-heart'></i>
                                <p class="likes">${objects[i].likes}</p>
                            </div>
                            <div class="insta__itemSocials d-flex">
                                <i class='bx bx-message-rounded'></i>
                                <p class="comments">${objects[i].view}</p>
                            </div>
                        </div>

                        
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content modal__insta">
                            <button type="button" class="moddal__close" data-bs-dismiss="modal" aria-label="Close"><i class='bx bx-x' style='color:#ffffff'></i></button>

                            <div class="modal-body moddal__body">

                                <img class="media__insta" src="${objects[i].media[0]}"></img>

                                <div class="moddal__desc col-6">
                                    <div class="moddal__desc_header d-flex desc">
                                        <img class="desc__img" src="images/profile.webp" alt="s">
                                        <p class="desc__title">LanscapesBeautyPhotos</p>
                                        <a class="desc__link" href="#">Подписаться</a>
                                        <div class="bx-three-dot">
                                            <i class='bx bx-dots-horizontal-rounded' style='color:#0e0e0e'></i>
                                        </div>
                                    </div>
                                    <div class="moddal__about about">
                                        <div class="about__item">
                                            <img class="about-img desc__img" src="images/profile.webp" alt="">
                                            <div class="about__d-main">
                                                <p><span class="desc__title">LanscapesBeautyPhotos</span> Like if it's beautiful</p>
                                                <p class="about__desc">Posted @withregram • @thecolindougan Would you live in this Cabin?? 🤔🌲🌊 —————— @JamieOut is considering it 😂🏕☀️ . <br>. Luptatem itaque minima voluptatibus odit sint delectus corrupti iusto voluptate
                                                    nesciunt perspiciatis dignissimos vel, laborum incidunt nulla vitae quo saepe nemo repellat. Modi culpa incidunt exercitationem aspernatur harum neque eum dicta.</p>
                                                <p class="time__desc">48 day.</p>
                                            </div>
                                        </div>
                                        <div class="about__item">
                                            <img class="about-img desc__img" src="images/profile2.jpg" alt="">
                                            <div class="about__d-main">
                                                <p><span class="desc__title">Omg person</span> beautiful</p>
                                                <p class="about__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur non minus molestias consequuntur, facilis distinctio soluta maiores! Explicabo mollitia voluptatem itaque minima voluptatibus odit sint
                                                </p>
                                                <p class="time__desc">5 day. <button>answer</button></p>
                                            </div>
                                        </div>
                                        <div class="about__item">
                                            <img class="about-img desc__img" src="images/profile3.jpg" alt="">
                                            <div class="about__d-main">
                                                <p><span class="desc__title">Liandery Waldersat</span> so good</p>
                                                <p class="about__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur non minus voluptatibus odit sint
                                                </p>
                                                <p class="time__desc">5 day. <button>answer</button></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="moddal__nrv">
                                        <div class="moddal__view view">
                                            <div class="d-flex">
                                                <svg aria-label="Нравится" class="_8-yf5 " color="#000" fill="#000" height="24" role="img" viewBox="0 0 24 24" width="30"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>

                                                <svg aria-label="Комментировать" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="30"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>

                                                <svg aria-label="Поделиться публикацией" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="30"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                            </div>
                                            <div class="bookmark">
                                                <svg aria-label="Сохранить" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                            </div>
                                        </div>
                                        <div class="nrv__count">
                                            <p><span>104</span> отметок "Нравится"</p>
                                        </div>
                                    </div>
                                    <div class="moddal__comment d-flex">
                                        <svg aria-label="Смайлик" class="_8-yf5 " color="#262626" fill="#262626" height="30" role="img" viewBox="0 0 24 24" width="30"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                                        <form class="add-comment-form">
                                            <input class="addcomment-input" type="text" placeholder="Добавьте комментарий...">
                                            <button type="submit">Опубликировать</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
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