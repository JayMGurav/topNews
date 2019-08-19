class NewArticle extends HTMLElement{

    constructor(){
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }
    /**
     * @param {any} article
     */
    set article(article){
        this.root.innerHTML = `
            <style>
                img{
                    width: 400px;
                    border: none;
                    border-radius: 4px;
                }
                a{
                    text-decoration: none;
                    color: #363535;
                }
                @media only screen and (max-width: 600px) {
                    img{
                        width: 300px;
                    }
                }
            </style>
            <a href = "${article.url}">
                <h2>${article.title}</h2>
                <img src="${article.urlToImage || ""}" />
                <p>${article.description || ""}</p>
            <a>
        `;


    }

}

customElements.define('news-article', NewArticle);