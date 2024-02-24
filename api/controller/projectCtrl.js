const ProjectService = require("../services/projectService");

const projectService = new ProjectService();

exports.createProject = async (req, res) => {
  try {
    const { data, message, success } = await projectService.addProject(req);
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

exports.getAProject = async (req, res) => {
  try {
    const { data, message, success } = await projectService.getOneProject(
      req,
      res
    );
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

exports.getAllProject = async (req, res) => {
  try {
    const { data, message, success } = await projectService.getAllProject(
      req,
      res
    );
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

exports.updateProject = async (req, res) => {
  try {
    const { data, message, success } = await projectService.updateProject(
      req,
      res
    );
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

exports.deleteAProject = async (req, res) => {
  try {
    const { message, success } = await projectService.deleteAProject(req, res);
    if (!success) {
      return res.status(400).json({ success, message });
    }
    return res.json({ message, success });
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
