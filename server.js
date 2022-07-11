const express = require('express')
const app = express()
const PORT = 8000
const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(response,request)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }
    
})

app.listen(PORT,()=>{
    console.log(`The server is now running on port ${PORT} betta go catch it!`)
})