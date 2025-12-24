import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
    
        username:{
            type:String,
            required:true,
            unique: true,
            lowcase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique: true,
            lowcase:true,
            trim:true
            

        },
        fullname:{
             type:String,
            required:true,
            trim:true,
            index:true
        },
        avatar:{
            type:String ,// it will be url
            required:true,
        },
        coverImage:{
            type:String 
        },

        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref=""
            }
        ],
        password:{
            Type:String,
            required:[true, 'password is required']
        },
        refreshToken:{
          type:String  
        }

},{timestamps:true}

)
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password=bcrypt.hash(this.password, 10)
    next()
})

userSchema.method.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)