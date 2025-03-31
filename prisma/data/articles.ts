export interface ArticlesData {
    title: string,
    topicName: string,
    authorId: number,
    body: string,
    createdAt: string,
    votes: number,
    article_img_url: string
}

export const articles: ArticlesData[] = [
    {
        "title": "The Impressionist Revolution in French Music",
        "topicName": "impressionism",
        "authorId": 1,
        "body": "An in-depth look at how composers like Claude Debussy and Maurice Ravel transformed the landscape of music with their unique use of tone and color, emphasizing atmosphere over traditional structure.",
        "createdAt": "2023-05-15T12:00:00Z",
        "votes": 120,
        "article_img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/%22Island_Dreaming%22_by_Dano_J_Ocon_2019.jpg/1920px-%22Island_Dreaming%22_by_Dano_J_Ocon_2019.jpg"
    },
    {
        "title": "The Baroque Grandeur: Rameau’s Musical Legacy",
        "topicName": "baroque",
        "authorId": 2,
        "body": "Jean-Philippe Rameau's contribution to the Baroque era redefined music with his operas and theoretical works. Discover how his music exemplifies the ornate and expressive style of the period.",
        "createdAt": "2023-06-21T08:30:00Z",
        "votes": 180,
        "article_img_url": "https://upload.wikimedia.org/wikipedia/commons/7/70/W%C5%82adys%C5%82aw_Podkowi%C5%84ski_-_Olszynka_1894.jpg"
    },
    {
        "title": "Romanticism in French Music: The Legacy of Berlioz and Fauré",
        "topicName": "romanticism",
        "authorId": 3,
        "body": "Explore the emotional depth and dramatic contrasts of French Romanticism through the works of Hector Berlioz and Gabriel Fauré, whose compositions still resonate in today’s classical world.",
        "createdAt": "2023-07-12T14:45:00Z",
        "votes": 150,
        "article_img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2012_nov09_SanAngelo_Roma.jpg/1920px-2012_nov09_SanAngelo_Roma.jpg"
    },
    {
        "title": "Chanson Française: The Heart of French Music",
        "topicName": "chanson",
        "authorId": 4,
        "body": "Chanson Française tells stories of love, loss, and the everyday life of French culture. Discover the evolution of this genre, from its early origins to its place in contemporary French music.",
        "createdAt": "2023-08-05T09:00:00Z",
        "votes": 220,
        "article_img_url": "https://upload.wikimedia.org/wikipedia/commons/d/d5/2017-02_Hippolyte_Camille_Delpy_-_A_tree-lined_river_landscape%2C_a_village_beyond.jpg"
    },
    {
        "title": "The Avant-Garde Movement and Erik Satie’s Impact on Music",
        "topicName": "avant-garde",
        "authorId": 2,
        "body": "Erik Satie's eccentric and innovative approach to music was a pivotal influence on the Avant-Garde movement. Learn how his works broke conventions and paved the way for modern experimental music.",
        "createdAt": "2023-09-10T16:30:00Z",
        "votes": 175,
        "article_img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Leon_Chwistek_-_Boat.jpg/1920px-Leon_Chwistek_-_Boat.jpg"
    },
    {
        "title": "Modern Classical Music: The Innovators of the 20th Century",
        "topicName": "modern-classical",
        "authorId": 3,
        "body": "The modern classical era reflects a wide range of styles, with composers like Paul Dukas pushing the boundaries of harmony, rhythm, and orchestration. Discover the versatility of this innovative period in music.",
        "createdAt": "2023-10-01T11:00:00Z",
        "votes": 190,
        "article_img_url": "https://upload.wikimedia.org/wikipedia/commons/8/84/Overthrow_of_Autocracy.jpg"
    },
    {
        "title": "The Modernism of Albert Roussel: A Shift in Musical Expression",
        "topicName": "modernism",
        "authorId": 1,
        "body": "Albert Roussel’s compositions represent a break from traditional forms, embracing the modernist spirit of the 20th century. His innovative style continues to inspire composers who seek to redefine classical music.",
        "createdAt": "2023-10-15T10:00:00Z",
        "votes": 210,
        "article_img_url": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Raphael_Canossa_1991_Flower_Bed%2C_oil_on_canvas%2C_35_by_50.jpg"
}];


