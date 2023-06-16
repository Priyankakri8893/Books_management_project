const booksModel= require('../models/booksModel')
const userModel= require('../models/userModel')

// ### POST /books
// - Create a book document from request body. Get userId in request body only.
// - Make sure the userId is a valid userId by checking the user exist in the users collection.
// - Return HTTP status 201 on a succesful book creation. Also return the book document. The response should be a JSON object like [this](#books) 
// - Create atleast 10 books for each user
// - Return HTTP status 400 for an invalid request with a response body like [this](#error-response-structure)

const createBooks= async (req, res) => {

}

// ### GET /books
// - Returns all books in the collection that aren't deleted. Return only book _id, title, excerpt, userId, category, releasedAt, reviews field. Response example [here](#get-books-response)
// - Return the HTTP status 200 if any documents are found. The response structure should be like [this](#successful-response-structure) 
// - If no documents are found then return an HTTP status 404 with a response like [this](#error-response-structure) 
// - Filter books list by applying filters. Query param can have any combination of below filters.
//   - By userId
//   - By category
//   - By subcategory
//   example of a query url: books?filtername=filtervalue&f2=fv2
// - Return all books sorted by book name in Alphabatical order

const getBooks= async (req, res) => {

}

// ### GET /books/:bookId
// - Returns a book with complete details including reviews. Reviews array would be in the form of Array. Response example [here](#book-details-response)
// - Return the HTTP status 200 if any documents are found. The response structure should be like [this](#successful-response-structure) 
// - If the book has no reviews then the response body should include book detail as shown [here](#book-details-response-no-reviews) and an empty array for reviewsData.
// - If no documents are found then return an HTTP status 404 with a response like [this](#error-response-structure) 

const getBooksById= async (req, res) => {

}

// ### PUT /books/:bookId
// - Update a book by changing its
//   - title
//   - excerpt
//   - release date
//   - ISBN
// - Make sure the unique constraints are not violated when making the update
// - Check if the bookId exists (must have isDeleted false and is present in collection). If it doesn't, return an HTTP status 404 with a response body like [this](#error-response-structure)
// - Return an HTTP status 200 if updated successfully with a body like [this](#successful-response-structure) 
// - Also make sure in the response you return the updated book document. 

const updateBooks= async (req, res) => {

}

// ### DELETE /books/:bookId
// - Check if the bookId exists and is not deleted. If it does, mark it deleted and return an HTTP status 200 with a response body with status and message.
// - If the book document doesn't exist then return an HTTP status of 404 with a body like [this](#error-response-structure) 

const deleteBooksById= async (req, res) => {

}

module.exports= {createBooks, getBooks, getBooksById, updateBooks, deleteBooksById}