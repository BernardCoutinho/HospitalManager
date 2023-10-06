import PatientService from "../Service/patientService";
import {Request, Response, NextFunction} from "express"

const patientService = new PatientService();

class PatientController{

    async getAll(req: Request, res: Response, next: NextFunction){
        const patients = await patientService.getAll();
        
        return res.status(200).json(patients);
    }
}

export default PatientController