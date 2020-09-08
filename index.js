//gcloud functions deploy wishlistsConsult --runtime nodejs10
// --trigger-http --allow-unauthenticated
const escapeHtml = require('escape-html');

exports.wishlistDetail = (req, res) => {
    res.send('Lista de deseo');
}

exports.consultWishlists = (req, res) => {
    

    res.send(`${escapeHtml(req.query.iduser)} :) :) :) :)`);


}