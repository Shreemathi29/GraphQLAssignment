import uuidv4 from 'uuid/v4'

const Mutation = {
    createUser(parent, args, { db }, info) {
        const emailTaken = db.users.some((user) => user.email === args.data.email)

        if (emailTaken) {
            throw new Error('Email taken')
        }

        const user = {
            id: uuidv4(),
            ...args.data
        }

        db.users.push(user)

        return user
    },
    deleteUser(parent, args, { db }, info) {
        const userIndex = db.users.findIndex((user) => user.id === args.id)

        if (userIndex === -1) {
            throw new Error('User not found')
        }

        const deletedUsers = db.users.splice(userIndex, 1)

        db.books = db.books.filter((book) => {
            const match = book.author === args.id

            if (match) {
                db.reviews = db.reviews.filter((review) => review.book !== book.id)
            }

            return !match
        })
        db.reviews = db.reviews.filter((review) => review.author !== args.id)

        return deletedUsers[0]
    },
    updateUser(parent, args, { db }, info) {
        const { id, data } = args
        const user = db.users.find((user) => user.id === id)

        if (!user) {
            throw new Error('User not found')
        }

        if (typeof data.email === 'string') {
            const emailTaken = db.users.some((user) => user.email === data.email)

            if (emailTaken) {
                throw new Error('Email taken')
            }

            user.email = data.email
        }

        if (typeof data.name === 'string') {
            user.name = data.name
        }

       

        return user
    },
    createBook(parent, args, { db }, info) {
        const userExists = db.users.some((user) => user.id === args.data.author)

        if (!userExists) {
            throw new Error('User not found')
        }

        const book = {
            id: uuidv4(),
            ...args.data
        }

        db.books.push(book)

        return book
    },
    deleteBook(parent, args, { db }, info) {
        const bookIndex = db.books.findIndex((book) => book.id === args.id)

        if (bookIndex === -1) {
            throw new Error('book not found')
        }

        const deletedBooks = db.books.splice(bookIndex, 1)

        db.reviews = db.reviews.filter((review) => review.book !== args.id)

        return deletedBooks[0]
    },
    updateBook(parent, args, { db }, info) {
        const { id, data } = args
        const book = db.books.find((book) => book.id === id)

        if (!book) {
            throw new Error('Book not found')
        }

        if (typeof data.title === 'string') {
            book.title = data.title
        }

        if (typeof data.body === 'string') {
            book.body = data.body
        }

        if (typeof data.published === 'boolean') {
            book.published = data.published
        }

        return book
    },
    createReview(parent, args, { db }, info) {
        const userExists = db.users.some((user) => user.id === args.data.author)
        const bookExists = db.books.some((book) => book.id === args.data.book && book.published)

        if (!userExists || !bookExists) {
            throw new Error('Unable to find author and book')
        }

        const review = {
            id: uuidv4(),
            ...args.data
        }

        db.reviews.push(review)

        return review
    },
    deleteReview(parent, args, { db }, info) {
        const reviewIndex = db.reviews.findIndex((review) => review.id === args.id)

        if (reviewIndex === -1) {
            throw new Error('Review not found')
        }

        const deletedReviews = db.reviews.splice(reviewIndex, 1)

        return deletedReviews[0]
    },
    updateReview(parent, args, { db }, info) {
        const { id, data } = args
        const review = db.reviews.find((review) => review.id === id)

        if (!review) {
            throw new Error('No reviews')
        }

        if (typeof data.text === 'string') {
            review.text = data.text
        }

        return review
    }
}

export { Mutation as default }