const express = require('express');
const dataBooks = require('../data/books');
const router = express.Router();

/* GET books listing. */
router.get('/', async function(req, res, next) {
  let books = await dataBooks.getBooks();

  res.send(books);
});

router.get('/:title', async (req, res, next)=>{
    let book = await dataBooks.getBooks(req.params.title);
    res.send(book);
});

router.post('/', async (req, res, next)=>{
    let result = await dataInventors.pushInventor(
        {
            _id: req.body._id,
            first: req.body.first,
            last: req.body.last,
            year: req.body.year
        }
    );

    res.send(result)
});

router.put('/:id', async (req, res, next)=>{
    let result = await dataInventors.updateInventor(
        {
            _id: req.params.id,
            first: req.body.first,
            last: req.body.last,
            year: req.body.year
        }
    );

    res.send(result)
});

router.delete('/:id', async (req, res, next)=>{
    let result = await dataInventors.deleteInventor(req.params.id);
    res.send(result);
});

module.exports = router;