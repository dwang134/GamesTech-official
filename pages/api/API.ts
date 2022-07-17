
export const fetchArticles = async(api_key: string, query: string, limit: number,  page: number, language?: string, sortBy?: string)=> {
        //max 3 countries, 2 categories, 2 languages
        const endpoint = `https://newsapi.org/v2/everything?apiKey=${api_key}&q=${query}&pageSize=${limit}&page=${page}`
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
        Tech = "new%20AND%20tech", //same thing as "new tech"
        PcParts = "pc%20AND%20computer%20%AND%20gpu%20%AND%20cpu",
        Nvidia = "nvidia%20AND%20gpu",
        FAANG = "facebook%20%AND%20amazon%20%AND%20apple%20%AND%20netflix%20%AND%20google",
        Games = "games%20AND%20release",
        Nintendo = "nintendo",
        Playstation = "playstation",
        Xbox = "xbox",
        // PC = "pc%20AND%20games%20NOT%20deals",
        Anime = "anime"
}

export const categoryList:{tech: string[], games: string[]} = {
  tech: ["Tech", "PC Parts", "Nvidia", "FAANG"],
  games: ["Games", "Nintendo", "Playstation", "Xbox","Anime"]
}