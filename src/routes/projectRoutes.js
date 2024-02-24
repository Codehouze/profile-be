/**
 * @swagger
 * tags:
 *   name: Project
 *   description: Todo managing API
 * paths:
 *   /project:
 *     get:
 *       summary: Get all projects
 *       tags: [Project]
 *       responses:
 *         200:
 *           description: Successful response. Returns a list of projects
 *     post:
 *       summary: Create a new Project.
 *       tags: [Project]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *               required:
 *                 - title
 *       responses:
 *         201:
 *           description: Project created successfully. Returns the created project.  
 *        
 *   /project/{id}:
 *     get:
 *       summary: Get a project by ID
 *       tags: [Project]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The ID of the todo
 *       responses:
 *         200:
 *           description: Successful response. Returns the requested project.
 *         404:
 *           description: project not found.
 *      
 *     patch:
 *       summary: Update a project by ID
 *       tags: [Project]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The ID of the
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *       responses:
 *         200:
 *           description: Successful response. Returns the updated project.
 *         404:
 *           description: Project not found.
 *     
 *     delete:
 *       summary: Delete a project by ID
 *       tags: [Project]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The ID of the Project
 *       responses:
 *         200:
 *           description: Successful response. Returns a confirmation message.
 *         404:
 *           description: Project not found.
 *     
 *   
 */


const router = require("express").Router();
const projectCtrl = require("../controller/projectCtrl");
router.post("/", projectCtrl.createProject);
router.get("/id", projectCtrl.getAProject);
router.get("/", projectCtrl.getAllProject);
router.patch("/:id", projectCtrl.updateProject);
router.delete("/:id", projectCtrl.deleteAProject);

module.exports = router;
