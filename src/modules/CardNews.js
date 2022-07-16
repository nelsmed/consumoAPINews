export default class CardNews {
    constructor (datos, image){
        this.title = datos.title;
        this.description = datos.description;
        this.image = image;
        this.content = datos.content;
        this.url = datos.url
    }
    generateCard () {
        return  `
                <img src="${this.image}" alt="${this.title}" width=100%>
                <a href="${this.url}">
                    <div class="news__content">
                        <h3 class="news__content--title"> ${this.title} </h3>
                        <p class="news__content--description">${this.description}</p>
                    </div>
                </a>`
    }
    
}
