(function () {
    //hero swiper
    try {
        var swiper = new Swiper(".mySwiper1", {
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } catch (e) {

    }

    try {
        var swiper = new Swiper(".mySwiper2", {
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } catch (e) {

    }

    //fetch news from robotica
    function newsItemTemplate({img, content, title, url}) {
        return `
        <div class="swiper-slide">
                            <div class="news__text">
                            <h3 class="news__title"><a href="${url}" target="_blank">${title}</a></h3>
                                ${content}
                            </div>
                            <div class="news__image">
                                <img src="${img}" alt="Image" loading="lazy">
                            </div>
                        </div>
        `;
    }

    fetch('https://robotica.in.ua/wp-json/wp/v2/posts?categories=8&per_page=4')
        .then(res => res.json())
        .then(data => {
            let latestNews = document.getElementById('latestNews');
            if (latestNews) {
                data.forEach(item => {
                    let img = item.fimg_url || 'https://robotica.in.ua/wp-content/uploads/2019/05/robotica_new.jpg',
                        text = item.excerpt.rendered,
                        url = item.guid.rendered,
                        title = item.title.rendered;
                    latestNews.innerHTML += newsItemTemplate({img, content: text, url, title});
                })
            }
            console.log(data)
        })
        .catch(err => console.log(err.message));
})()