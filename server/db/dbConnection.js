import mongoose from "mongoose";

const dbconnect = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://ubaidullahuoh:ubaidullahuoh@ems.zhg3rwk.mongodb.net/?retryWrites=true&w=majority');
        console.log('you are connected succesfully')
    } catch (error) {
        console.log('you are not connected')
             console.log(error)        
    }
};

export default dbconnect;