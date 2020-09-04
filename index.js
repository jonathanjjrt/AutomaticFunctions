//gcloud functions deploy wishlistsConsult --runtime nodejs10
// --trigger-http --allow-unauthenticated
const escapeHtml = require('escape-html');

exports.wishlistDetail = (req, res) => {
    res.send('Lista de deseo');
}

exports.consultWishlists = (req, res) => {
    
    var jsonD = '{';
    jsonD +='  "wishlisid": "1",';
    jsonD +='  "wishlistname": "Fulanito",';
    jsonD +='  "skuNumber": "5"';
    jsonD +='},';
    jsonD += '{';
    jsonD +='  "wishlisid": "1",';
    jsonD +='  "wishlistname": "Fulanito",';
    jsonD +='  "skuNumber": "5"';
    jsonD +='}';


    //  ${escapeHtml(req.query.iduser)} ${escapeHtml(req.body.iduser)}   
    res.send(`${jsonD}`);


}