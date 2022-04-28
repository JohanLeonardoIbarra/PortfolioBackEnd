import Express from 'express';
import { Morgan } from 'morgan';


const app = Express();

//Settings

app.set("port", process.env.PORT || 3000);

//Middlewares

app.use(Morgan('dev'));

//Routes

//Server Init

app.listen(app.get("port"), () => {
    console.log("Server on port:", app.get("port"));
});