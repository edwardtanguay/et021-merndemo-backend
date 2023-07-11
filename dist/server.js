import * as config from './config.js';
import express from 'express';
import mongoose from 'mongoose';
import { Framework } from './models/Framework.js';
mongoose.set('strictQuery', false);
mongoose.connect(config.MONGODB_CONNECTION);
const app = express();
const port = 4801;
export const getFrameworks = async () => {
    const docFrameworks = await Framework.find();
    return docFrameworks;
};
app.get('/', (req, res) => {
    res.send('backend');
});
app.get('/frameworks', async (req, res) => {
    res.send(await getFrameworks());
});
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map