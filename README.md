# Noticias

<h1>
    <img src="/noticias/public/news-capture2.gif">
</h1>

# Summary

- [About](#about)
- [Technologies](#technologies)
- [Setup](#setup)
- [API](#-news-api)
- [License](#license)
- [Contact](#contact)
 
## About

This project consists of an application that brings together news from different sources, where the title of the article, a brief description and an image are shown. News is obtained by consuming the News API, which in this case was done with the Axios library. The main purpose of this project was the study and application of the Context API, available within React itself from version 16, which is used to manage global states, as an alternative to the way of passing data using props. The data placed as Context are exactly the news obtained from the external API.

There is no demonstration of the application on the Vercel platform, as the News API, in the free plan, does not allow requesting data in production.


### :desktop_computer: Desktop design

![image](https://user-images.githubusercontent.com/4975360/234625629-e71ba92a-8cb6-43df-bc0c-5b58ae5e64c6.png)

### :iphone: Tablets design

![image](https://user-images.githubusercontent.com/4975360/234626075-001f5ce4-ab6a-4604-9680-f842227b520a.png)

### :iphone: Mobile design

<img src="https://user-images.githubusercontent.com/4975360/234630763-9a2e193d-d3ea-4eab-9b5f-190028b14a89.png" style="width: 50%;">



### Technologies

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev/guide/)
- [Axios](https://www.npmjs.com/package/react-dropdown)
- [React Icons](https://react-icons.github.io/react-icons/)

## Setup

```bash
git clone https://github.com/edpadua/Noticias

cd noticias
npm i
npm run dev
```

## [🚀 news-api](https://newsapi.org/)

Get the API Key value from the website and assign it to the environment variable VITE_API_KEY in the .env file


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


## Contact

Eduardo de Pádua: ed.padua@gmail.com

Project Link: [https://github.com/edpadua/Noticias/](https://github.com/edpadua/Noticias) 
