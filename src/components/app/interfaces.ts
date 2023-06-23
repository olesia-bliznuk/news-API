export interface IData {
        sources: ISource[];
        articles: IArticle[];
}

export interface ISource {
    name: string;
    id: string;
}

export interface IArticle {
    urlToImage: string;
    author: string;
    source: {
        name: string;
    };
    publishedAt: string;
    title: string;
    description: string;
    url: string;
}