function getArticleGenerator(articles) {
    let vault = articles.slice();

    function main(){
        console.log(vault);
        let containerArticle = document.querySelector('#content' );
        let articleElement = document.createElement('ARTICLE');


        if (vault.length > 0){
            articleElement.textContent = vault.shift();
            containerArticle.appendChild(articleElement);
        }
    }

    return main;
}
