//importerer dependency package express.
const express = require("express")
//instansiere, så vi kan bruge objektet.
const app = express();
app.use(express.static('public'))

/**array for API */
let weekDays = [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
]

/**route*/
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/birthday.html")
})

/**API */
app.get("/api/weekDays", (req,res) => {
    const date = new Date();
    const today = weekDays[date.getDay()]
    res.send({data: today})
})


/**PORT */

const PORT = 8080
app.listen(PORT, (error) => {
    if(error){
        console.log(error)
    }
    console.log("server is running on PORT: ", PORT)
})
