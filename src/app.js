import Express from 'express';
import Morgan from 'morgan';
import ProjectsRouter from './routes/projects/projects.js';
import "dotenv/config";

const app = Express();

//Settings

app.set("port", process.env.PORT || 3000);

//Middlewares

app.use(Morgan('dev'));
app.use(Express.json());

//Routes

app.use("/api", ProjectsRouter)

//Server Init

app.listen(app.get("port"), () => {
    console.log("Server on port:", app.get("port"));
});