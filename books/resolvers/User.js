const User = {
    books(parent, args, { db }, info) {
        return db.books.filter((book) => {
            return book.author === parent.id
        })
    },
    reviews(parent, args, { db }, info) {
        return db.reviews.filter((review) => {
            return review.user === parent.id
        })
    }
}

export { User as default }