const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const roomName = document.getElementById("room-name");
const userList = document.getElementById("users");

const socket = io();

// get username and room from url
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix:true,
});

// join chat room
socket.emit("joinRoom",{ username, room } );

// get room and users
socket.on("roomUsers",(({room,users}) => {
    outputRoomName(room);
    outputUsers(users);
}))



// message from server
socket.on("message", message => {
    outputMessage(message);

    // to scroll to bottom of chat whenever recieve new msg
    chatMessages.scrollTop = chatMessages.scrollHeight;
})

// message submit
chatForm.addEventListener("submit",(e) => {
    e.preventDefault();

    const msg = e.target.elements.msg.value;
    
    if(msg.trim() !== ""){
         // emitting messaeg to server
        socket.emit("chatMsg", msg);

        // clear input
        e.target.elements.msg.value = "";
        e.target.elements.msg.focus();
    }
   
})

const outputMessage = (message) =>{
    const div = document.createElement("div");

    // sender here is used to apply conditional styling of messaeg div depending on user
    let sender;

    if(message.username === "Chat Wave"){
        sender = "bot";
    }
    else if(message.username === username){
        sender = "me";
    }
    else{
        sender = "other"
    }
    div.classList.add("message");
    
    div.innerHTML = `<div class=${sender}>
        <div>
            <p>${message.username}</p>
            <span class="text">${message.text}</span>
            <small>${message.time}</small> 
        </div>
    </div>`

    document.querySelector(".chat-messages").appendChild(div);
}

// add room name to DOM
const outputRoomName = (room) => {
    roomName.innerText = `Room: ${room}`;

}

// add users to DOM
const outputUsers = (users) => {
    userList.innerHTML = `
    ${users.map((u) => `<p>${u.username}</p>`).join("")}
    `;
}