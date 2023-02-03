const Query = {
    users(parent, args, { db }, info) {
        if (!args.query) {
            return db.users
        }

        return db.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    books(parent, args, { db }, info) {
        if (!args.query) {
            return db.books
        }

        return db.books.filter((book) => {
            const isTitleMatch = book.title.toLowerCase().includes(args.query.toLowerCase())
            const isBodyMatch = book.body.toLowerCase().includes(args.query.toLowerCase())
            return isTitleMatch || isBodyMatch
        })
    },
    reviews(parent, args, { db }, info) {
        return db.reviews
    },
    me() {
        return {
            id: '123098',
            name: 'sindhu',
            email: 'sindhu@gmail.com'
        }
    },
    book() {
        return {
            id: '092',
            title: 'Fairy Tales',
            body: 'Childrens world',
            published: false
        }
    }
}

export { Query as default }