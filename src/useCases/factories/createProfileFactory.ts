import { PrismaProfileRepository } from "@/repositories/implementations/prisma/PrismaProfileRepository"
import { CreateProfile } from "@/useCases/CreateProfile"

export function createProfileFactory():CreateProfile {
    const invoiceRepository = new PrismaProfileRepository
  
    const useCase = new CreateProfile(invoiceRepository)
  
    return useCase
}