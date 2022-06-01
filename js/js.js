(function () {
    //fetch news from robotica
    function newsItemTemplate({link, title, img, content}) {
        return `
        <div class="news__item">
                        <h3 class="news__title"><a href="${link}" target="_blank">${title}</a></h3>
                        <div class="news__content">
                            <a href="${link}" target="_blank" class="news__image">
                                <img src="${img}" alt="${title}" loading="lazy">
                            </a>
                            <div class="news__text">
                                ${content}
                            </div>
                        </div>
                    </div>
        `;
    }
    fetch('https://robotica.in.ua/wp-json/wp/v2/posts?categories=8&per_page=3')
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err.message));
})()