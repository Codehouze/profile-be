const Project = require("../src/model/ProjectSchema");

class ProjectService {
  async addProject(req) {
    const { title, subTitle, description, stack, image, url } = req.body;

    const data = new Project({
      title,
      subTitle,
      description,
      stack,
      image,
      url,
    });
    const newProject = await Project.create(data);
    if (newProject) {
      return {
        data: { title, subTitle, description, stack, image, url },
        message: "success",
        success: true,
      };
    }
  }
  //TODO: fix get a project by id in mongodb
  async getOneProject(req) {
    console.log(req.params);
    const getProject = await Project.findById(_id);
    if (!getProject) {
      return {
        data: null,
        success: false,
        message: "This project does not exist",
      };
    }
    return {
      data: getProject,
      message: "success",
      success: true,
    };
  }
  async getAllProject() {
    const getProjects = await Project.find();
    if (!getProjects) {
      return {
        data: null,
        success: false,
        message: "No Project found",
      };
    }
    return {
      data: getProjects,
      message: "success",
      success: true,
    };
  }

  async updateProject(req) {
    const { id } = req.params;
    const data = req.body;
    const updateProject = await Project.findOneAndUpdate(data);
    if (!updateProject) {
      return {
        data: null,
        success: false,
        message: "No update was made.",
      };
    }
    return {
      data: updateProject,
      message: "success",
      success: true,
    };
  }

  async deleteAProject(req) {
    const { id } = req.params;
    const deleteProject = await Project.findOneAndDelete({ _id: id });
    if (!deleteProject) {
      return {
        success: false,
        message: "Project not found",
      };
    }
    return {
      message: "success",
      success: true,
    };
  }
}

module.exports = ProjectService;
