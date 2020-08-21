import express, {Application,Request,Response} from 'express';
import cors from 'cors';
import path from "path";
const app: Application = express();
app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencod

app.get('/api',(req:Request,res:Response) => {
    res.send('Hello. This is the backend service for my personal webpage. If you need more information please contact me: stivenosorio19@gmail.com')
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build/')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(4001,()=>console.log('server running'));