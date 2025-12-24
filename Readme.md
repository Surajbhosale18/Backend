# backend code
-[model links](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)


#first we created public folder and in public we created temp folder in temp going to save future some images data etc
public-temp
-------------------------------------------------------------------------------------------------------------------

# after temp create gitignore file
gitignore file ignore senstive files it not uplode file name from gitignore such as .env etc beacuse they are sensetive files
-------------------------------------------------------------------------------------------------------------------


# create src folder and in src create 3 filse app.js 
constant.js
index.js

// command is touch app.js constant.js index.js

-------------------------------------------------------------------------------------------------------------------

#after that we install
nodemon nodemonhelps to run the file we not need to do npm start alway it run automaticly afer saving code

comand is npm i -D nodemon
-------------------------------------------------------------------------------------------------------------------
create folders in src 
mkdir controllers db middlewares modles routs utils

-------------------------------------------------------------------------------------------------------------------

installing pretieer extanion
npm i prettier

beacuase when we work in team there will be typing or code differnce like someone adding semicolna somone not adding so it can cause the problem so we pretier avoid those complicats

in addition we need to create two files
.prettierrc --- in which we defin the writing rulse
/Users/surajbhosale/Desktop/back/.prettierrc

.prettieringore fro igorning file
-------------------------------------------------------------------------------------------------------------------

writed port number and mongodb url in env
first created databse from mongodb atls
then copy link and pasted in env

-------------------------------------------------------------------------------------------------------------------
creted the database name  and stored in constats.js file beacause if we ever have to change db name we dont have do change from all code so its easier to store at constant,js file
export const DB_NAME="videotube"

// storing database name


-------------------------------------------------------------------------------------------------------------------

now installing mongoose express dotenv

 npm i mongoose express dotenv


-------------------------------------------------------------------------------------------------------------------
      #  CONNECTING DATABASE
       -------------------------------------------------------------------------------------------------------------------
       1- save url of databse copied from mogndb in a variable MONGODB_URl we can give any name

       2- after that we have to give the name to the database so i have give name to the database in constant.js
       export const DB_NAME="videotube"

       3- then in db/index.js 
       we imported mongoose
       and imported dbname from constant.js

       ```javascript
       import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
       ```

       4- then created asyc function in index.js to connect ro the databse




       -------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
i skiped some notes which are not undrstanid in which created utility folder , middleware etc

-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
 now creating model for user and video in modles folder 
 user.model.js
 video.model.js
$$
for user
$$
 {
  _id: ObjectId,                // Primary Key
  watchHistory: [ObjectId],     // Array of Video IDs
  username: String,
  email: String,
  fullName: String,
  avatar: String,               // profile image URL
  coverImage: String,           // cover photo URL
  password: String,
  refreshToken: String,
  createdAt: Date,
  updatedAt: Date
}
f**or video**
{
  _id: ObjectId,            // Primary Key
  videoFile: String,        // video URL / path
  thumbnail: String,        // thumbnail image URL
  owner: ObjectId,          // reference to users
  title: String,
  description: String,
  duration: Number,         // in seconds
  views: Number,
  isPublished: Boolean,
  createdAt: Date,
  updatedAt: Date
}



now importing new model
npm i mongoose-paginate-v2

aggrigate model 


--------------------------------------------------------------------------------------------------------
# now we will inatll bcyrpt library to hash our passoword
npm i bcryptjs

A library to help you hash passwords.

--------------------------------------------------------------------------------------------------------
# also installed jsonwebtoke
for passord incription dand dicryption

----------------------------------------------------



