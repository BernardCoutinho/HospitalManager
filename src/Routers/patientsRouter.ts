import  express  from "express";
import PatientController from "../Controllers/patientController";

const patientController = new PatientController();
const router = express.Router();

router.get('/patients', patientController.getAll)

export default router