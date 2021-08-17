"use strict";

exports.postContactInformation = (req, res) => {
    console.log(req.body.name);
    res.render("thanks", { title: 'Temiladeola Oladugba\'s Resume', name: req.body.name});
}