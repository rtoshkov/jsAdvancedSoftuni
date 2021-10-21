class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {"picture": 200, "photo": 50, "item": 250};
        this.listOfArticles = [];
        this.guests = [];
        this._pointsScheme = {'Vip': 500, 'Middle': 250};
    }

    addArticle( articleModel, articleName, quantity ){
        articleModel = articleModel.toLowerCase();
        quantity = Number(quantity);

        if(!Object.keys(this.possibleArticles).includes(articleModel)){
            throw new TypeError('This article model is not included in this gallery!');
        }

        let article = this.listOfArticles.filter((e) => e.articleModel === articleModel && e.articleName === articleName)

        if (article.length !== 0){
            let exArticle = article[0];
            exArticle.quantity += quantity;
        }else{
            this.listOfArticles.push({articleModel, articleName, quantity});
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest ( guestName, personality){
        let searchGuests = this.guests.filter((e) => e.guestName === guestName);

        if(searchGuests.length > 0){
            throw new TypeError(`${guestName} has already been invited.`)
        }

        this.guests.push(
            {guestName,
                points: this._pointsScheme[personality] === undefined ? 50 : this._pointsScheme[personality],
                purchaseArticle:0}
        )
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle ( articleModel, articleName, guestName){
        articleModel = articleModel.toLowerCase();
        let searchArticle = this.listOfArticles.filter((e) => e.articleModel === articleModel && e.articleName === articleName);
        let searchGuest = this.guests.filter((e) => e.guestName === guestName);

        if(searchArticle.length === 0){
            throw new TypeError(`This article is not found.`);
        }

        let article = searchArticle[0];

        if (article.quantity === 0){
            return `The ${articleName} is not available.`;
        }

        if(searchGuest.length === 0){
            return `This guest is not invited.`;
        }

        let guest = searchGuest[0];

        if (guest.points < this.possibleArticles[articleModel]){
           return `You need to more points to purchase the article.`;
        }

        guest.points -= this.possibleArticles[articleModel];
        guest.purchaseArticle += 1;
        article.quantity -= 1;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`

    }

    showGalleryInfo (criteria){
        let result = [];
        if (criteria === 'article'){
            result.push('Articles information:');
            this.listOfArticles.forEach((e) => {
                result.push(`${e.articleModel} - ${e.articleName} - ${e.quantity}`);
            })
        }else{
            result.push('Guests information:');
            this.guests.forEach((e) => {
                result.push(`${e.guestName} - ${e.purchaseArticle}`);
            })

        }
        return result.join('\n');
    }
}

