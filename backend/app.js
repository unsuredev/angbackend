const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const Post = require('../models/post');


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-type, Accept "
    );
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST,PATCH,DELETE. OPTIONS"
    );
});

app.post('/api/posts', (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content

    });

    console.log(post);
    res.status(201).json({
        message: "post send successfully"
    });

});


app.get('/api/posts', (req, res, next) => {

    const posts = [

        {
            id: '8552585',
            title: 'this is first serverside title',
            content: 'this is coming from server'

        },
        {
            id: '855258fdfg5',
            title: 'this is second serverside title',
            content: 'this is coming from server!!!!!!!! second'

        }
    ];
    return res.status(200).json(
        {
            message: 'post messsge successfully',
            posts: posts
        }
    );


});


module.exports = app;