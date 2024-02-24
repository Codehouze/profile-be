const ContactService = require("../services/contactService");

const contactService = new ContactService();

exports.contact = async (req, res) => {
  try {
    const { data, message, success } = await contactService.addMessage(req);
    if (!success) {
      return res.status(400).json({ success, message });
    }
    return res.json({ data, message, success });
  } catch (err) {
    console.log(err);
    // logger.error(
    //   `Method:${req.method} Endpoint:${req.originalUrl} message:${err.message}, stack trace:${err.stack}`
    // );
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};
