const express = require('express')
const res = require('express/lib/response')

require('./db/mongoose')

var cors = require('cors');
app.use(cors());
const Contact=require('./models/contacts')

const app=express()
const port=process.env.PORT 

app.use(express.json())

app.post('/contact',(req,res)=>{
    const contact=new Contact(req.body)
    contact.save().then(()=>{
        res.status(201).send(contact);
    }).catch((e)=>{
        res.status(400)
        res.send(e);
    })
})

app.get('/contact',(req,res)=>{
    Contact.find({}).then((contacts)=>{
        res.send(contacts)
    }).catch((e)=>{
        res.status(500).send(e);

    })
})
// search for user
app.get('/contactsearch',(req,res)=>{
    const lastName=req.query.q
    Contact.find({lastName}).then((contacts)=>{
        res.send(contacts)
    }).catch((e)=>{
        throw new Error("No Conatcts")
    })
})


app.patch('/contact',async (req,res)=>{
    const updatedContact=req.body
        const contact=await Contact.findOne({_id:updatedContact._id})
        if(!contact){
            return res.status(404).send();
        }
        contact.firstName=updatedContact.firstName
        contact.lastName=updatedContact.lastName
        contact.number=updatedContact.number
        console.log(contact)
        await contact.save()
        res.status(200).send(contact)
})

app.delete('/contact',(req,res)=>{
    Contact.findOne({_id:req.body._id}).then((contact)=>{contact.remove()
    return res.send(200)
    }
    ).catch((e)=>{
        res.status(404).send()
    })
})


app.listen(port,()=>{
    console.log("Server is Running")
})