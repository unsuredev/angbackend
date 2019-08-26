const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Header",
        "Origin, X-Requested-With,Content-type, Accept "
    );
res.setHeader("Access-Control-Allow-Methods", 
"GET, POST,PATCH,DELETE. OPTIONS"
);
next();
});

app.post('/api/posts', (req, res, next) =>
{
    console.log)()
})


app.use('/api/posts', (req, res, next) => {

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