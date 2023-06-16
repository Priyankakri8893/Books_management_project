const express= require('express')
const router= express.Router()
const {createBooks, getBooks, getBooksById, updateBooks, deleteBooksById}= require('../controllers/booksController')

router.post('/books', createBooks)
router.get('/books', getBooks)
router.get('/books/:bookId', getBooksById)
router.put('/books/:bookId', updateBooks)
router.delete('/books/:bookId', deleteBooksById)