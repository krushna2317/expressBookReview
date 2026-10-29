const axios = require('axios');

const books = async function () {
    try {
        const response = await axios.get(
            'http://localhost:5000/'
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
};

const bookByISBN = async function (isbn) {
    try {
        const response = await axios.get(
            `http://localhost:5000/isbn/${isbn}`
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
};

const bookByAuthor = async function (author) {
    try {
        const response = await axios.get(
            `http://localhost:5000/author/${encodeURIComponent(author)}`
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
};

const bookByTitle = async function (title) {
    try {
        const response = await axios.get(
            `http://localhost:5000/title/${encodeURIComponent(title)}`
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = {
    books,
    bookByISBN,
    bookByAuthor,
    bookByTitle
};
