const { createServer } = require('https')
const http = require('http')
const { parse } = require('url')
const { readFileSync } = require('fs')
const next = require('next')
const RPC = require('discord-rpc')

const ports = {
    http: 80,
    https: 443
}
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev: false });
const handle = app.getRequestHandler()

const httpsOptions = {
    key: readFileSync('C:/Certbot/live/adnauseam.xyz/privkey.pem'),
    cert: readFileSync('C:/Certbot/live/adnauseam.xyz/fullchain.pem')
}

app.prepare()
    .then(() => {
        createServer(httpsOptions, (req, res) => {
            const parsedURL = parse(req.url, true)
            handle(req, res, parsedURL)
        }).listen(ports.https, err => {
            if (err) throw err;
            console.log('HTTPS Ready!')
        })

        http.createServer((req, res) => {
            const parsedURL = parse(req.url, true)
            handle(req, res, parsedURL)
        }).listen(ports.http, err => {
            if(err) throw err
            console.log('HTTP Ready!')
        })
    })

const rpc = new RPC.Client({ transport: 'ipc' })
const clientId = '811198200803098625'

rpc.on('ready', () => {
    rpc.setActivity({
        details: `Minecraft Server`,
        state: `IP: adnauseam.xyz`,
        largeImageKey: "largeimage",
        largeImageText: "Sunshine",
        buttons: [
          { label: "Join.", url: "https://adnauseam.xyz/redir/gg" },
        ],
        instance: false,
      });
    })

rpc.login({ clientId })
                       .then((cl) => console.log(`Logged in as ${cl.user.username}#${cl.user.discriminator}`))
                       .catch(console.log)