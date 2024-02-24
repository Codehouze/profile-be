const ContactMessage = require("../model/contactSchema");

class ContactService {
  async addMessage(req) {
    const { name, email, subject, message } = req.body;

    const data = new ContactMessage({
      name,
      email,
      subject,
      message,
    });
    const newContact = await ContactMessage.create(data);
    if (newContact) {
      return {
        data: newContact,
        message: "success",
        success: true,
      };
    }
  }
  async getAllMessages(req) {
    const getMsg = await ContactMessage.findAll(data);
    if (!getMsg) {
      return {
        data: null,
        success: false,
        message: "No message found",
      };
    }
    return {
      data: getMsg,
      message: "success",
      success: true,
    };
  }
  // todo: create a filter message with date, name, email, message,
}

module.exports = ContactService;
