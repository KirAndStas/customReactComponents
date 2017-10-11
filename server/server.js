import path        from 'path';
import express     from 'express';
import { appPort } from '../etc/config.json';

const app = express();

app.use(express.static('./dist'), (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(appPort, () => {
    console.log(`Server is runing on ${appPort}, go to http://localhost:0001`);
});

