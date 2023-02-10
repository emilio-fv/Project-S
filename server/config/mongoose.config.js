// Import Mongoose
const mongoose = require('mongoose'); 

// Initialize name of database
const dbName = 'Project-S'; 

// Connect To MongoDB
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Established connection to database ${dbName}`)
}).catch((error) => {
    console.log("Hmm something went wrong", error)
})