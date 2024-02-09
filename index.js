const express = require("express")
const cors = require("cors");
const axios = require('axios');
const bodyParser = require('body-parser')
const app = express()
const port = 10000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.options('*', cors())

const con = require("./config/database")

// const { iic_token, token, geocoder_api } = require("./config/tokens");

// const getCoords = async (address) => {
//     const params = {
//         auth: geocoder_api,
//         locate: address,
//         json: '1'
//     }

//     axios.get('https://geocode.xyz', { params })
//         .then(response => {
//             console.log(response.data);
//         }).catch(error => {
//             console.log(error);
//         });
// }

app.get('/', cors(), (req, res) => {
    // res.json({ success: true, data: [1, 2, 3], info: 'Node.js, Express, and Postgres API' })
    res.sendStatus(200);
})

app.get('/api/tema1', cors(), (req, res) => {

    con.query("SELECT fen FROM chesspuzzles;", function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result.rows)
    });
})

app.post('/api/checkmove', cors(), async (req, res) => {
    console.log(req.body)
    con.query("SELECT solution From ChessPuzzles Where puzzleid = $1", [req.body.id], function (err, result) {
        if (err) throw err;
        const solution = JSON.parse(result.rows[0].Solution);
        if (solution.length === 0) throw err;

        const [playerMove, botMove] = solution[req.body.turn - 1].split(' ')

        const [from, to] = playerMove.split(":");
        const start = req.body.team === 'w' ? 'a' : 'h'

        let newBotMove = "WIN"
        if (botMove !== "WIN") {
            const [botFrom, botTo] = botMove.split(":");
            newBotMove = [
                {
                    x: Math.abs(botFrom[0].charCodeAt(0) - start.charCodeAt(0)),
                    y: Number(botFrom[1]) - 1
                },
                {
                    x: Math.abs(botTo[0].charCodeAt(0) - start.charCodeAt(0)),
                    y: Number(botTo[1]) - 1
                }
            ]
        }

        console.log(from[0].charCodeAt(0) - start.charCodeAt(0), req.body.move[0].x)
        console.log(Number(from[1]), req.body.move[0].y)
        console.log(to[0].charCodeAt(0) - start.charCodeAt(0), req.body.move[1].x)
        console.log(Number(to[1]), req.body.move[1].y)

        console.log(newBotMove)
        if (Math.abs(from[0].charCodeAt(0) - start.charCodeAt(0)) === req.body.move[0].x
            && Number(from[1]) - 1 === req.body.move[0].y
            && Math.abs(to[0].charCodeAt(0) - start.charCodeAt(0)) === req.body.move[1].x
            && Number(to[1]) - 1 === req.body.move[1].y) {
            console.log("Zaebic")
            res.json({ correct: "yes", botMove: newBotMove });
        } else {
            res.json({ correct: "no" });
        }
    })
})

app.get('/daulet', cors(), async (req, res) => {
    res.json({ daulet: "Daulet" });
})

app.post('/order', cors(), async (req, res) => {
    console.log(req.body)
    const host = "hakaton.gov4c.kz"
    const URL = `http://${host}/vshep-api/con-sync-service?requestId=${req.body.requestId}&requestIIN=${req.body.IIN}&token=${iic_token}`

    axios.get(URL, {})
        .then(response => {
            console.log(response.data);
            const data = response.data;
            res.send({ data })
        })
        .catch(error => {
            console.error(error);
        })
});

app.post('/order/create', cors(), async (req, res) => {
    console.log(req.body)
    con.query(`INSERT INTO address (region, city, street, apartment, entrance, floor, building) VALUES ('${req.body.delivery_address.region}', '${req.body.delivery_address.city}', '${req.body.delivery_address.street}', '${req.body.delivery_address.apartment}', '${req.body.delivery_address.entrance}', '${req.body.delivery_address.floor}', '${req.body.delivery_address.building}');`, function (err, result) {
        if (err) throw err;
        console.log(result);
    })
    con.query(`INSERT INTO main (order_id, client_id, receiver_id, status_time, status, delivery_address, con_address) VALUES ('${req.body.order_id}', '${req.body.client_id}', '${req.body.receiver_id}', NOW(), '${req.body.status}', LAST_INSERT_ID(), '${req.body.con_address}');`, function (err, result) {
        if (err) throw err;
        console.log(result);
    })
    let destination;
    let origin;
    getCoords(Object.values(req.body.delivery_address).join(", ")).then(response => {
        console.log("response: " + response)
        // destination = [response.standard.latt, response.standard.longt]
        // console.log(destination);
    })
    getCoords(req.body.con_address).then(response => { origin = [response.standard.latt, response.standard.longt] })
    console.log(origin, destination);


    // console.log(Object.values(req.body.delivery_address).join(", "))
    res.send(200);
})

app.post('/person', cors(), async (req, res) => {
    console.log(req.body)
    axios.get(`http://hakaton-fl.gov4c.kz/api/persons/${req.body.IIN}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            console.log(response.data);
            const data = response.data
            res.send({ data })
        })
        .catch(error => {
            console.error(error);
        });
})





app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})