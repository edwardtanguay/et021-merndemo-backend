import express from 'express';

const app = express();
const port = 4801;

app.get('/', (req: express.Request, res: express.Response) => {
	res.send('backend')
});

app.get('/frameworks', (req: express.Request, res: express.Response) => {
	res.send('this will be the framework array')
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
})

