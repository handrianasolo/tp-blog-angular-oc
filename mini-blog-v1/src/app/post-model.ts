export class Post {

    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    /**
     * Constructeur par défaut
     *
     * @param title         titre de l'article
     * @param content       contenu de l'article
     * @param loveIts       nombre de "j'aime"
     * @param created_at    date de création
     */
    constructor(title: string, content: string, loveIts: number) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = new Date();
    }
}
