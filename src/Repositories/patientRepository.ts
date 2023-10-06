import { prisma } from "../Configs/prisma";
import {Patient} from "@prisma/client";

class PatientRepository {
    
    
    public async create(patient: Omit<Patient, 'id'>){
        try {
           return prisma.patient.create({
                data:{
                    ...patient,
                } 
            });
        } catch (error) {
            
        }
    }

    async update(id:number, patient:Patient){
        prisma.patient.update({
            where: {
                id:id
            },
            data:{
                ...patient
            }
        });
    }

    async getAll(){
        
        const patients = prisma.patient.findMany();
        return patients;
    
    }
    
    async getById(id: number){
        try {
            return prisma.patient.findFirst({
                where: {
                    id:id
                }
            });
        } catch (error) {
            
        }
    }

    async deleteById(id: number){
        prisma.patient.delete({
            where:{
                id:id,
            }
        });

    }
}

export default PatientRepository;
