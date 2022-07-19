
export const fetchArticles = async(api_key: string, query: string, limit: number,  page: number, sortBy?: string, language?: string)=> {
        //max 3 countries, 2 categories, 2 languages
        const endpoint = `https://newsapi.org/v2/everything?q=${query}&apiKey=${api_key}&pageSize=${limit}&page=${page}`
        const res = await fetch(endpoint);
        const data = res.json();
        return data;
}

export type News = {
  status: string;
  totalResults: number; 
  articles: article[];
};

export type article = {
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
        Tech = "technology",
        PcParts = "pc%20AND%20computer%20%AND%20gpu%20%AND%20cpu",
        Nvidia = "nvidia%20AND%20gpu",
        FAANG = "facebook%20%AND%20amazon%20%AND%20apple%20%AND%20netflix%20%AND%20google",
        Games = "games",
        Nintendo = "nintendo",
        Playstation = "playstation",
        Xbox = "xbox",
        PcGames = "pc%20AND%20games%20%AND%20steam%20%AND%20riotgames"
}




