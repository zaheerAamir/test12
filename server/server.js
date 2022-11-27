
const { MongoClient } = require('mongodb')
const uri = 'mongodb+srv://Aamir:Zaheeraamir@cluster0.p7n6faq.mongodb.net/?retryWrites=true&w=majority'
const express = require('express')
const PORT = 8000

const app = express()
let info

const arr = Math.floor(Math.ceil(Math.random() * 1425))
console.log(arr)
app.post('/', (req,res) => {
    res.json('Hello bois')
})


 
fetch('https://api.publicapis.org/entries',{
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
})
.then(function(response){
    console.log( 'Status code: '+ ' ' + response.status)
    return response.json()
})
.then(async(data) => {
    console.log(data.entries)
    info = data.entries
})
.catch(function(err){
    console.error(err)
}) 
       
        

       

app.post('/user', async(req, res) => {
    const client = new MongoClient(uri)

    try{
        await client.connect().then(() => {console.log('connected')}).catch((err) => console.log(err))
        const database = client.db('new_data')
        const user = database.collection('user34')
        info.forEach(element => {
            user.insertOne(element)
        })

       const returnusers = await user.find().toArray()
       res.send(returnusers)
    }
    catch{
        await client.close()
    } 

})
        
    


app.listen(PORT, () => {console.log('server running on PORT' + ' ' + PORT)})