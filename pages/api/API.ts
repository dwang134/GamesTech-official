
export const fetchArticles = async(api_key: string, query: string, limit: number,  page: number, language?: string, sortBy?: string)=> {
        //max 3 countries, 2 categories, 2 languages
        const endpoint = `https://newsapi.org/v2/everything?apiKey=${api_key}&q=${query}&pageSize=${limit}&page=${page}`
        const res = await fetch(endpoint);
        const data = res.json();
        return data;
}


/*
'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbu2SsF-Or3Rsn3NxqODImw&maxResults=6&order=date&q=trailer&type=video&videoDefinition=high&key=[YOUR_API_KEY]' \
--header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
--header 'Accept: application/json' \
--compressed
*/

export const fetchVideos = async(api_key: string, part: string, channelId:string, limit: number, orderBy:string, query:string, type:string, videoDefinition:string, publishedAfter?:Date)=> {
        // const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=${part}&channelId=${channelId}&q=${query}`
        const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=${part}&channelId=${channelId}&maxResults=${limit}&order=${orderBy}&q=${query}&type=${type}&videoDefinition=${videoDefinition}`
        console.log(endpoint);
        const res = await fetch(endpoint);
        console.log(res);
        const data = res.json();
        console.log(data);
        return data;
}

export type News = {
  status: string;
  totalResults: number; 
  articles: Article[];
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

export enum categoryQuery {

        // Technology: Tech, Nvidia, FAANG, PC Parts:computer, graphics card, cpu
        //Games: Games, Nintendo, Playstation, Xbox, PC games
        Tech = "new%20AND%20tech", //same thing as "new tech"
        Hardwares = "monitor%20and%20gpu%20and%20cpu%20-deals",
        Nvidia = "nvidia%20AND%20gpu",
        FAANG = "facebook%20and%20amazon%20and%20apple%20and%20netflix%20and%20google%20-deals%20-cnet",
        Games = "games%20AND%20release",
        Nintendo = "nintendo",
        Playstation = "playstation",
        Xbox = "xbox",
        // PC = "pc%20AND%20games%20NOT%20deals",
        Anime = "anime"
}

export const categoryList:{tech: string[], games: string[]} = {
  tech: ["Tech", "Hardwares", "Nvidia", "FAANG"],
  games: ["Games", "Nintendo", "Playstation", "Xbox", "Anime"]
}