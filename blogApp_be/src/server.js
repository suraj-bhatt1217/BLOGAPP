import express from 'express';

let articlesInfo = [{
    name: 'learn-react',
    upvotes: 0,
    comments: [],
}, {
    name: 'learn-node',
    upvotes: 0,
    comments: [],
}, {
    name: 'mongodb',
    upvotes: 0,
    comments: [],
}]

const app = express();
app.use(express.json());

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});