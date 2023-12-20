require('dotenv').config();
const HOSTEMAIL = process.env.HOSTEMAIL || '';
const USEREMAIL = process.env.USEREMAIL || '';
const PASSEMAIL = process.env.PASSEMAIL || '';
const PORTEMAIL = process.env.PORTEMAIL || 465 //25 587 465
const PORT = process.env.PORT || 3010
module.exports={
    HOSTEMAIL,
    USEREMAIL,
    PASSEMAIL,
    PORTEMAIL,
    PORT
}