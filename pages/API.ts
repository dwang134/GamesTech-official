export const fetchArticles = async(api_key: string, searchQuery:string, countries: string, categories: string, languages: string)=> {
        //max 3 countries, 2 categories, 2 languages
        const endpoint = `https://newsdata.io/api/1/news?apikey=${api_key}&q=${searchQuery}&country=${countries}&language=${languages}&category=${categories}`
        //https://newsdata.io/api/1/news?apikey=pub_9134d152ea4204f05b197abbd887c46a518b&q=gaming%20OR%20nintendo%20OR%20playstation%20OR%20riotgames%20OR%20bandai%20-music%20-movie%20-deals%20-actor&country=ca,tw,us&language=zh,en&category=entertainment 
        const res = await fetch(endpoint);
        const data = res.json();
        return data;
}

export type Articles = {
  status: string;
  totalResults: number;
  results: any;
  nextPage: number;
};

export type Article = {
  title: string;
  link: string;
  source_id: string;
  keywords: string[];
  creator: string[];
  image_url: string;
  video_url: string;
  description: string;
  pubDate: string;
  content: string;
  country: string[];
  category: string[];
  language: string;
};




