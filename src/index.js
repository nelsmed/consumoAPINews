import  CardNews from './modules/CardNews.js';
//import fetch from "node-fetch";


let API_KEY = '2b2c9ef7cef4467ab2718e473409d717';
let URL = 'https://newsapi.org/v2/top-headlines?apiKey=2b2c9ef7cef4467ab2718e473409d717&pageSize=45&country=ar';

let getResponse = async function  (link) {
    const response = await fetch(link)
    const data = await response.json();
    return data.articles;
      
};



let newsSection = document.getElementById('noticias');
const newsResponse = await getResponse(URL)
for (const news of newsResponse) {
    const imageUrl = news.urlToImage
    if (imageUrl && news.title) {
        const noticias = new CardNews(
            {
                title : news.title,
                description : news.description,
                content:  news.content,
                url  : news.url
            }, imageUrl)
    let div = document.createElement('div');
    div.innerHTML = noticias.generateCard();
    div.classList.add('news');
    newsSection.appendChild(div);
    }
}

