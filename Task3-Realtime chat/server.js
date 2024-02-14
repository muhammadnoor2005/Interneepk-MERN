if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}


const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cors = require("cors");

const app = express();
const http = require("http");
const server = http.createServer(app);

const socketio = require("socket.io");
const io = socketio(server);

const {formatMessage} = require("./services/messages");
const { userJoin, getCurrUser,userLeave,getRoomUsers} = require("./services/users");

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")))
app.use(cors());    


// when client connets
io.on("connection",socket => {
    const botName = "Chat Wave";
    socket.on("joinRoom",({ username, room }) => {

        const user = userJoin(socket.id,username,room);
        socket.join(user.room);

         // welcome curr user
        socket.emit("message",formatMessage(botName,"Welcome to Chat Wave"));

        // broadcast when user connects
        socket.broadcast.to(user.room).emit("message",formatMessage(botName,`${user.username} joined the chat`));

        // shows all users in a room
        io.to(user.room).emit("roomUsers",{
            room:user.room,
            users:getRoomUsers(user.room),
        })

    })
   
    // listen for chatMsg
    socket.on("chatMsg",(msg) => {
        const user = getCurrUser(socket.id);
        io.to(user.room).emit("message",formatMessage(user.username,msg));
    })

    socket.on("disconnect", () => {
        const user = userLeave(socket.id);

        if(user){
            io.to(user.room).emit("message",formatMessage(botName,`${user.username} left the chat`));

             // WHEN DISCONNECT then update the users in the room
            io.to(user.room).emit("roomUsers",{
            room:user.room,
            users:getRoomUsers(user.room),
        })
        }   
    })
});
 

const PORT = 3000 || process.env.PORT;

server.listen(PORT,() => {
    console.log("Server started on port",PORT);
});
