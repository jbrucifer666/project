
var http = require('http');
const querystring = require('querystring');


  
    http.createServer(function (req, res) {
   if (req.method === 'POST') {
         let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            res.end('ok');
            var obj = querystring.parse(body);
            var tool = "";
            if(obj['product_name'] == "Meditek Q&A Bot")
             {
                tool="qabot";
             }else if(obj['product_name'] == "Meditek Scarebot")
             {
                 tool="scarebot";
             }
             else if(obj['product_name'] == "Meditek Greetbot")
             {
                 tool="greetbot";
             }
            var key = serial.generate(20, "-", 5);
            if(tool != ""){
            pool.query("INSERT INTO productkeys (streamer, tool,toolkey,used,changed) VALUES('"+obj['Twitchname']+"','"+tool+"','"+key+"',0,0)", function (err, result) {
           
            });       
            
            }
           
        });
    }else{
       res.writeHead(200); 
      res.end();
    }
   
  }).listen(1047);
  

  /*

  
var TwitchJS  = require('twitch-js');
twitch()

    var msg1 = [];

function twitch()
{
    const options = {
      channels: ["#"+channel],    
      clientID:"",
       identity: {
         username: Brucifer_bot,
         password: "oauth:fq88i5z1ehtrbuyei76r777naxnwhr"+code
       },
    };

    const client = new TwitchJS.client(options);

    client.on('chat', (channels, userstate, message, self) => {
      console.log(`Message "${message}" received from ${userstate['display-name']}`);

    });

    // Finally, connect to the channel
    client.connect();

    var mes1 = setInterval(function()
    {
        if (msg1.length > 0)
        {
            client.say(channel,msg1[0]);
            msg1.shift();
        }
    }, 1000);
}


  */
