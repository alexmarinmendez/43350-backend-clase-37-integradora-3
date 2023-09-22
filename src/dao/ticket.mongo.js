import TicketModel from "../models/ticket.model.js";

export default class Ticket {
    get = async() => await TicketModel.find()
    create = async(data) => await TicketModel.create(data)
    getById = async(id) => await TicketModel.findById(id)
    updata = async(id, data) => await TicketModel.updateOne({ _id: id }, data)
}