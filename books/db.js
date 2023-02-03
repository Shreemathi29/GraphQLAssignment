const users = [{
    id: '1',
    name: 'shree',
    email: 'shree@gmail.com',
    age: 27
}, {
    id: '2',
    name: 'Sujatha',
    email: 'sujatha@gmail.com'
}, {
    id: '3',
    name: 'Kalki',
    email: 'kalki@gmail.com'
}]

const books = [{
    id: '10',
    title: 'The last House',
    body: 'This is a thrilling novel which gives a good experience to feel the horror...',
    published: true,
    author: '1'
}, {
    id: '11',
    title: 'Hary Poter',
    body: 'This is an advanced animation hollywood book...',
    published: true,
    author: '2'
}, {
    id: '12',
    title: 'The Adventure',
    body: 'Explore the world',
    published: false,
    author: '3'
}]

const reviews = [{
    id: '102',
    text: 'This worked well for me. Thanks!',
    author: '3',
    book: '10'
}, {
    id: '103',
    text: 'Glad you enjoyed it.',
    author: '1',
    book: '10'
}, {
    id: '104',
    text: 'This did no work.',
    author: '2',
    book: '11'
}, {
    id: '105',
    text: 'Nevermind. I got it to work.',
    author: '1',
    post: '12'
}]

const db = {
    users,
    books,
    reviews
}

export { db as default }