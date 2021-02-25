import dotenv from 'dotenv'
import { Client } from 'discord.js'

dotenv.config()

const client = new Client()
client.login(process.env.DISCORD_TOKEN)

export default async (req, res) => {
    const { guildID } = req.query

    const gi = (await client.guilds.fetch(guildID)).iconURL({ dynamic: true, size: 2048 })

    return res.json({ guildIcon: gi })
}