const net = require('net')

let email = "<theamansharma5@gmail.com>"
const commands = [
  'HELO gmail\r\n',
  'MAIL FROM: <theamansharma5@gmail.com>\r\n',
  `RCPT TO: ${email}\r\n`,
  'DATA\r\n',
  `FROM: <theamansharma5@gmail.com>\r\nTO: ${email}\r\nSUBJECT: Testing\r\nThis is cool!\r\n.\r\n`,
  'QUIT\r\n'
]

let i = 0

const socket = net.createConnection(25, 'gmail-smtp-in.l.google.com', () => console.log('Connected to gmail SMTP server.'))

socket.on('data', buff => {
  const result = buff.toString()
  if(result.includes('550-5.1.1')){
    console.log("Email Doesn't Exists");
    socket.destroy()
  }else if (result.includes('221 2.0.0 closing connection')) {
    socket.end(()=>{console.log("End")})
  } else if (i < commands.length) {
    console.log("Email exists");
    socket.write(commands[++i])
  } else {
    console.log('Ran out of commands but did not receive 221 response from SMTP server')
    socket.destroy()
  }
})

socket.write(commands[i])

