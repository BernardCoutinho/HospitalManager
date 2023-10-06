import PatientRepository from "../Repositories/patientRepository"
import { Patient } from "@prisma/client";
const patientRep = new PatientRepository();
class  PatientService{


    async getAll(): Promise<Patient[]>{
        const patients = await patientRep.getAll();
        return patients
    }

    async getById(id:number): Promise<Patient | null | undefined>{
        return patientRep.getById(id);
    }

    async create(patient: Patient): Promise<Patient | undefined>{
        return patientRep.create(patient);
    }

    async deleteById(id:number): Promise<void>{
        return patientRep.deleteById(id);
    }

    async update(id:number, patient: Patient): Promise<void>{
        return patientRep.update(id, patient);
    }
}

export default PatientService;