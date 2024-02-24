/**
 * @swagger
 * tags:
 *   name: Contact
 *   description: Contact Api 
 * paths:
 *   /contact:
 *      post:
 *       summary: Send a new message.
 *       tags: [Contact]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 subject:
 *                   type: string
 *                 message:
 *                   type: string
 *               required:
 *                 - name
 *                 - email
 *                 - subject
 *                 - message
 *                  
 *       responses:
 *         201:
 *           description: Message sent successfully.  
 *        
 *   
 */



const router = require("express").Router();
const contactCtrl = require("../controller/contactCtrl");

router.post("/", contactCtrl.contact);

module.exports = router;
