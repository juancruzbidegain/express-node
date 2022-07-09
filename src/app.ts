import  express, {Request, Response}  from "express";
const app = express()


const $PORT = process.env.PORT || 3000;


app.use(express.json())

app
 .route("/")
 .get((req: Request, res:Response) => {
    res.send('You make a GET request :) ')
 })
 .post((req: Request, res:Response) => {
    res.send('You make a POST request :) ')
 })






app.listen(3000, () => {
    console.log("App runing in port 3000")
})