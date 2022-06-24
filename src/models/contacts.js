const mongoose=require('mongoose')
const validator=require('validator')


const Contact=mongoose.model('Contacts',{
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    number:{
        type:Number,
        required:true,
        trim:true,
        validate(value){
            var a=value.toString()
            if(a.length != 10){
                throw new Error("Invalid Number")
            }
        },
        unique:true,
    }
})

module.exports=Contact;