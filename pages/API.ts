import type { StaticImageData } from "next/image"

export const fetchArticles = async(api_key: string, query: string, limit: number,  page: number)=> {
        //max 3 countries, 2 categories, 2 languages
        const endpoint = `https://newsapi.org/v2/everything?q=${query}&apiKey=${api_key}&pageSize=${limit}&page=${page}`
        const res = await fetch(endpoint);
        const data = res.json();
        return data;
}

export type News = {
  status: string;
  totalResults: number;
  articles: any;
};

export type Article = {
        source: {id: string | null, name: string},
        author: number | null,
        title: string,
        description: string,
        url: string,
        urlToImage: string,
        publishedAt: string,
        content: string
};




