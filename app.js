//importerer dependency package express.
const express = require("express")
//instansiere, så vi kan bruge objektet.
const app = express();
app.use(express.static('public'))

/**route*/
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/time.html")
})

/**API */

/**PORT */

const PORT = 8080
app.listen(PORT, (error) => {
    if(error){
        console.log(error)
    }
    console.log("server is running on PORT: ", PORT)
})
