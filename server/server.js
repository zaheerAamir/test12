
const {MongoClient} = require('mongodb')
const uri = 'mongodb+srv://Aamir:Zaheeraamir@cluster0.p7n6faq.mongodb.net/?retryWrites=true&w=majority'


const express = require('express')
const PORT = 8000

const app = express()


app.post('/', (req,res) => {
    res.json('Hello bois')
})

 

app.post('/user', (req,res) => {
    async function get(){
        const client = new MongoClient(uri)
    
        await client.connect()
        const db = client.db('new_data')
        const collection = db.collection('user34')
    
        const get =  await fetch('https://api.publicapis.org/entries')
        const respose = await get.json()
        console.log(get.status)
        const arr = respose.entries
    
    
        for( i = 0; i<arr.length; i++){
            
            await collection.updateOne(
                {Link: arr[i].Link},
                {$set: {
                    API: arr[i].API ,
                    Description: arr[i].Description ,
                    Auth: arr[i].Auth ,
                    HTTPS: arr[i].HTTPS ,
                    Cors: arr[i].Cors ,
                    Link: arr[i].Link ,
                    Category: arr[i].Category
                }},
                {upsert: true}
            )

        }
               

        const returndata = await collection.find().toArray()
        res.send(returndata)
        console.log('Data sent🚀')
    }
           
    get()  
})

     
        
    


app.listen(PORT, () => {console.log('server running on PORT' + ' ' + PORT)})