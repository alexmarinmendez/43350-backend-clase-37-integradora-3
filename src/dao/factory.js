import config from '../config/config.js'
import mongoose, { mongo } from 'mongoose'

export let User
export let Ticket

switch (config.persistence) {
    case 'FILE':
        const { default: UserFile } = await import('./user.file.js')
        const { default: TicketFile } = await import('./ticket.file.js')
        User = UserFile
        Ticket = TicketFile
        break;
    case 'MONGO':
        mongoose.connect(config.mongoURI, {
            dbName: config.mongoDBname
        })
        const { default: UserMongo } = await import('./user.mongo.js')
        const { default: TicketMongo } = await import('./ticket.mongo.js')
        User = UserMongo
        Ticket = TicketMongo
        break;

    default:
        break;
}