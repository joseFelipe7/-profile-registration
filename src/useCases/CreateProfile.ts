import { Address } from "@/domain/entities/Address";
import { Profile } from "@/domain/entities/Profile";
import { IProfileRepository } from "@/repositories/IProfileRepository";
import { DocumentDuplicateError } from "./errors/DocumentDuplicateError";

type CreateProfileRequest = {
  accept_terms: number;
  type_person: string;
  name: string;
  email: string;
  document_number: string;
  cpf_responsible: string;
  phone: string;
  cellphone: string;
  address:{
    cep:          string;
    street:       string;
    number:       string;
    complement:   string;
    state:        string;
    city:         string;
    neighborhood: string;
  }
}
export class CreateProfile {
  constructor(private profileRepository: IProfileRepository) {}

  async execute( data: CreateProfileRequest ) {
    const hasProfile = await this.profileRepository.findByDocument(data.document_number)
    if(hasProfile) throw new  DocumentDuplicateError()
    const profile = Profile.create({
      acceptTerms: data.accept_terms,
      typePerson: data.type_person,
      name: data.name,
      email: data.email,
      documentNumber: data.document_number,
      cpfResponsible: data.cpf_responsible,
      phone:  data.phone,
      cellphone: data.cellphone
    })
    const address = Address.create({
      cep:          data.address.cep,
      street:       data.address.street,
      number:       data.address.number,
      complement:   data.address.complement,
      state:        data.address.state,
      city:         data.address.city,
      neighborhood: data.address.neighborhood,
    })
    const profileCreate = await this.profileRepository.createProfile(profile, address)
    
    return profileCreate
  }
}