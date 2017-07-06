var express = require('express');
var app = express();
var io = require('socket.io')(server, {origins:'domain.com:* http://domain.com:* http://www.domain.com:*'});

app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000, function() {
    // console.log('Server listening');
});
