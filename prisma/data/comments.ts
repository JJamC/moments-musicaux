export interface CommentsData {
    articleId: number,
    authorId: number,
    votes: number,
    createdAt: string,
    body: string
}

export const comments: CommentsData[] =
[
    {
        "articleId": 1,
        "authorId": 2,
        "votes": 12,
        "createdAt": "2023-05-16T08:45:00Z",
        "body": "This article really captures the essence of Impressionism in music. Debussy's 'Prélude' is such a perfect example of this style."
    },
    {
        "articleId": 2,
        "authorId": 3,
        "votes": 8,
        "createdAt": "2023-03-23T10:20:00Z",
        "body": "Rameau's influence on French Baroque music can't be overstated. His work laid the groundwork for many classical pieces."
    },
    {
        "articleId": 3,
        "authorId": 4,
        "votes": 15,
        "createdAt": "2023-08-11T14:35:00Z",
        "body": "Berlioz's orchestral arrangements are unmatched, and his 'Symphonie fantastique' is a must-listen for any music lover."
    },
    {
        "articleId": 4,
        "authorId": 5,
        "votes": 7,
        "createdAt": "2023-09-06T11:55:00Z",
        "body": "I love how this article highlights the evolution of chanson. It really shows how French music has kept its charm over the years."
    },
    {
        "articleId": 5,
        "authorId": 6,
        "votes": 10,
        "createdAt": "2023-07-02T16:05:00Z",
        "body": "Satie's works are unique in their simplicity and depth. 'Gymnopédies' is a prime example of his approach to music."
    },
    {
        "articleId": 6,
        "authorId": 7,
        "votes": 18,
        "createdAt": "2023-06-13T09:50:00Z",
        "body": "Fauré's harmonic language is so moving and beautiful. His 'Pavane' is one of my favorite pieces from this period."
    },
    {
        "articleId": 7,
        "authorId": 8,
        "votes": 5,
        "createdAt": "2023-04-19T17:45:00Z",
        "body": "Franck's symphonic works have an intensity that resonates deeply with the listener. His use of themes is masterful."
    },
    {
        "articleId": 8,
        "authorId": 9,
        "votes": 14,
        "createdAt": "2023-10-22T12:15:00Z",
        "body": "Dukas' 'The Sorcerer's Apprentice' is one of the most vivid pieces of music. It really brings the story to life."
    },
    {
        "articleId": 9,
        "authorId": 10,
        "votes": 3,
        "createdAt": "2023-11-13T18:30:00Z",
        "body": "Roussel's modernist style was ahead of its time. His music has a complexity that I find intriguing and inspiring."
    }
]
