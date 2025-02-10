/**
 * For documentation consistency purposes, only single quotes/backticks
 * will be used instead of the double-quotation symbols. This applies to 
 * strings and chars.
 */

import { Schema, model } from 'mongoose';

/**
 * Book Schema.
 */
const bookSchema = new Schema({

    // TODO: MongoDB uses a default ObjectID using _id

    /**
     * Official title / name of the book.
     */
    book_title: {
        type: String,
        required: [true, 'The book title is required.'],
        minlength: [5, 'The book title cannot be empty.'],
        trim: true,
    },

    /**
     * The name of the Author of the book.
     */
    book_author: {
        type: String,
        required: [true, 'The name of the author is required.'],
        minlength: [5, 'The author cannot be empty (must at least have initials).'],
        trim: true,
    },

    /**
     * A brief description of the book (e.g. synopsis, summary, etc.)
     */
    book_desc: {
        type: String,
        required: [true, 'The book description is required.'],
        minlength: [30, 'The book description cannot be empty (a brief one will do).'],
        maxlength: [500, 'The maximum word count has been reached.'],
        trim: true,
    },

    /**
     * The book's rating (how much the reader liked the book). The number
     * will correspond to the number of stars on the book. "Rating" here does
     * not refer to age rating / reading appropriateness.
     */
    book_rating: {
        type: Number,
        required: [true, 'The book rating is required.'],
        min: [0, 'The minimum rating is 0.'],
        max: [5, 'The maximum rating is 5.'],
    },

    /**
     * The reader may read a book multiple times. The book may be
     * read by different people/users. Reviews are separated into individual
     * entries instead of a single review for a single book.
     */
    book_reviews: {
        type: [String], // Array of reviews
        required: false,

        // TODO: verify is validators are needed
        // validate: {
        //     validator: function (value) {
        //         return Array.isArray(value); // Ensures field is an array
        //     },
        //     message: 'Book reviews must be an array of strings',
        // },
    },

    /**
     * The book genre / categories.
     */
    book_genre: {
        type: [String], // TODO: List of strings?
        required: [true, 'The book genre(s) is required.'],
        enum: { // TODO: Double check if implementation if correct
            values: [
                'Fiction', 
                'Non-Fiction', 
                'Sci-Fi', 
                'Fantasy', 
                'Romance', 
                'Mystery', 
                'Biography', 
                'History', 
                'Other'
            ],
            message: '{VALUE} is not a valid genre.'
        },
    },

    /**
     * The main cover image / image used to represent the book.
     * A book may have multiple images.
     */
    book_main_img: {
        type: String,
        required: [true, 'The main image URL is required.'],
        // match: [/^https?:\/\/.+/, 'Main image must be a valid URL'], // Validates HTTP/HTTPS URLs
    },

    // TODO: book_images are an array of images? image urls?
    // book_images: {},

    /**
     * The language the book is written in (e.g. English, Mandarin, etc.)
     */
    book_lang: {
        type: String,
        required: [true, 'Book language is required'],
    },

    /**
     * The status of whether a book has not been read, has been read, abandoned, etc.
     */
    book_status: {
        type: String,
        required: [true, 'Book status is required'],
        enum: {
            values: ['Unread', 'Read'],
            message: '{VALUE} is not a valid book status',
        },
    },

    /**
     * The date and time the book was added to the archive/library.
     */
    book_add_datetime: {
        type: Date,
        default: Date.now,
    }

});

/**
 * Export Book schema.
 */
export default model('Book', bookSchema);