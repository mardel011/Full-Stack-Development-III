$(function(){
    //make connection
    var socket = io.connect('http://localhost:3001')

    //buttons and inputs
    var message = $("#message")
    var username = $('#username')
    var send_message = $('#send_message')
    var send_username = $('#send_username')
    var chatroom = $('#chatroom')
    var feedback = $("#feedback");

    //Emit message
    send_message.click(function(){
        socket.emit('new_message', {message : message.val()})
    })

    //Listen on new_new message
    socket.on("new_message", (data) => {
        chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
    })

    //Emit a username
    send_username.click(function(){
        console.log(username.val())
        socket.emit('change_username', {username : username.val()})
    })

    //Emit typing
    message.bind("keypress", () => {
        socket.email('typing')
    })

    //Listen on typing 
    socket.on('typing', (data) => {
        feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>")
    })
});