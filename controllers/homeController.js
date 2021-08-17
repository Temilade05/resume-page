"use strict";

exports.getIndexPage = (req, res, next) => {
    res.render('index', { title: 'Temiladeola Oladugba\'s Resume' });
}