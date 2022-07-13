export const fetchArticles = async(api_key: string, countries: string, categories: string, languages: string)=> {
        //max 3 countries, 2 categories, 2 languages
        const endpoint = `https://newsdata.io/api/1/news?apikey=${api_key}&q=games%20OR%20nintendo%20OR%20playstation%20OR%20steam%20OR%20riot&country=${countries}&language=${languages}&category=${categories}`
        const res = await fetch(endpoint);
        const data = res.json();
        return data;
}

type Article{
    
}