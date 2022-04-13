const Books = require("../models/bookModels");

exports.sendReqParam = (req, res) => {
    let path = req.url;
    if (path == '/home'){
        Books.find( {}, (error, books) => {
            if (!error) {
                res.render("home", {data: books});
            } else {
                console.log('ERROR' + error);
            }
        });
    }
    else if (path == '/lab10'){
        res.sendFile(`./public/css/${path}.css`, {
            root: "./"
        })
    }
};
exports.respondWithBook = (req, res) => {
    let bookNumber = req.params.bookNumber;
    if (bookNumber == 1) {
        Books.findOne({bookName: "Harry Potter and the Goblet of Fire"}, (error, books) => {
            console.log(books);
            if (!error) {
                res.render(bookNumber, {data: books});
            } else {
                console.log('ERROR' + error);
            }
        });
    } else if (bookNumber == 2) {
        Books.findOne({bookName: "The Return of the King"}, (error, books) => {
            console.log(books);
            if (!error) {
                res.render(bookNumber, {data: books});
            } else {
                console.log('ERROR' + error);
            }
        });
    } else if (bookNumber == 3) {
        Books.findOne({bookName: "The Hunger Games"}, (error, books) => {
            console.log(books);
            if (!error) {
                res.render(bookNumber, {data: books});
            } else {
                console.log('ERROR' + error);
            }
        });
    }
    //Books.findOne({bookName: "The Hunger Games"}, function(err, obj) {console.log(obj.buyLink);})
    //console.log(Books.bookName);
};


const httpStatus = require("http-status-codes");
exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | The page does not exist!`);
};
exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`)
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`)
};