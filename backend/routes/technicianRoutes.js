const express = require("express");
const router = express.Router();

// const {Technician} = require("../Schemas/technicianSchema")

// const {
//   setTechnician,
//   getTechnician,
//   logoutTechnician,
//   changePassword,
// } = require('../controllers/technicianController');

// require controller
const technicianController = require("../Controllers/technicianController");

// require middleware
const authMiddleware = require("../middleware/authMiddleware");
//----------------------------------------------------------------------------

//              Technician CRUD
//----------------------------------------------------------------------------

// router.get('/Technicians', technicianController.getTechnician );0
//  tid---> technician Id
router.post("/signUp", technicianController.addTechnician);

router.post("/login", technicianController.getTechnician);

//-----------Update Data----------------------

// router.use(express.json())
router.put("/update/:id", technicianController.updateTechnician);

//----------Delete Records -----------------------

router.delete("/delete/:id", technicianController.deleteTechnician);

//====================================================

//----------< Authentification> and <Authorization>-------------------------

//     admin     632b3061c48a747227b4a41a

// Technician     632876fa137b95b9ac2df768

//  router.get('/allTechnicians/:id', authMiddleware.authenticateTechnician,
//                               authMiddleware.authorizeTechnician ,
//                               technicianController.getTechnician );

// //----------------------------------------------------------------------------

module.exports = router;