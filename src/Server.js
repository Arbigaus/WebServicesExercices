import Express from 'express';
import bodyParser from "body-parser";
import { calcDates } from "./Dates"
import { sortNumbers } from "./Numbers";
import { convertToMimimi } from "./Mimimi";

const app = Express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

export class Server {

    startup() {
        this.setupRoutes();
        app.listen(3000, () => console.log("Listening..."));
    }

    setupRoutes() {
        app.post('/calcDates', (req, res) => {
            let { startDate, endDate } = req.body
            let response = calcDates(startDate, endDate)

            res.send(response);
        })

        app.post('/numbers', (req, res) => {
            let { numbers } = req.body
            let response = sortNumbers(numbers)

            res.send(response)
        })

        app.post('/mimimi', (req, res) => {
            let { text } = req.body
            let response = convertToMimimi(text)

            res.send(response)
        })
    }
}