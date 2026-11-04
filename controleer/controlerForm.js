const nodemailer = require("nodemailer");
let user = require('../model/userModel');

let controler = async (req, res) => {

    
    let { name, gmail } = req.body;

  
    let dublegmail = await user.findOne({ gmail: gmail });

    if (dublegmail) {
        return res.send('exists gmail');
    }

    console.log(name, gmail);

    let username = new user({
        name: name,
        gmail: gmail,
    });

    await username.save();

    res.json({ message: 'done' });
};

module.exports = { controler };