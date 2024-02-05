import { prismaClient } from "@/database/prismaClient";
import { IProfileRepository } from "@/repositories/IProfileRepository";
import { Profile } from "@/domain/entities/Profile";
import { Address } from "@/domain/entities/Address";
import { profileToCamel } from "@/transform/profile";

export class PrismaProfileRepository implements IProfileRepository{
  async createProfile(profile: Profile, address?:Address):Promise<Profile | null>{
    let addressFormated = []
    if(address){
      addressFormated.push({
        cep:          address.props.cep,
        street:       address.props.street,
        number:       address.props.number,
        complement:   address.props.complement,
        state:        address.props.state,
        city:         address.props.city,
        neighborhood: address.props.neighborhood,
      })
      
    }
    const profileCreate = await prismaClient.profile.create({
      data: {
        accept_terms: profile.props.acceptTerms,
        type_person: profile.props.typePerson,
        name: profile.props.name,
        email: profile.props.email,
        document_number: profile.props.documentNumber,
        cpf_responsible: profile.props.cpfResponsible,
        phone: profile.props.phone??'',
        cellphone: profile.props.cellphone,
        address: {
          create: addressFormated,
        },
      },
    });
    
    return profileCreate ? Profile.create(profileToCamel(profileCreate), profileCreate.id):null
  }
  async findByDocument(document:string): Promise<Profile | null>{
    const profile = await prismaClient.profile.findUnique({
      where: {
        document_number: document,
      },
    })
    return profile ? Profile.create(profileToCamel(profile), profile.id):null
  }
}