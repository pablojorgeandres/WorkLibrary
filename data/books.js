const connection = require("./conecction");

async function getBooks(){
    const clientmongo = await connection.getConnection();
    const collection = await clientmongo.db("Books_Of_Work")
        .collection("books")
        .find()
        .toArray();

    return collection;
}

async function getBook(bookTitle){
    const clientmongo = await connection.getConnection();
    const doc = await clientmongo.db("Books_Of_Work")
        .collection("books")
        .findOne({_id: parseInt(bookTitle)});
    
    return doc;
}

async function pushBook(book){
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db("Books_Of_Work")
        .collection("books")
        .insertOne(book);

    return result;
}

async function updateInventor(inventor){
    const clientmongo = await connection.getConnection();
    const query = {_id: parseInt(inventor._id)};
    const newvalues = {$set: 
        {
            first: inventor.first,
            last: inventor.last,
            year: inventor.year
        }
    };

    const result = await clientmongo.db("Books_Of_Work")
        .collection("books")
        .updateOne(query,newvalues);
    
    return result;
}

async function deleteInventor(bookTitle){
    const clientmongo = await connection.getConnection();
    
    const result = await clientmongo.db("Books_Of_Work")
        .collection("books")
        .deleteOne({_id: parseInt(bookTitle)});
    
    return result;
}

module.exports = {getBooks, getBook, updateInventor, pushBook, deleteInventor};