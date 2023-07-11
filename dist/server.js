import express from 'express';
const app = express();
const port = 4801;
app.get('/', (req, res) => {
    res.send('backend');
});
app.get('frameworks', (req, res) => {
    res.send('this will be the framework array');
});
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map