import { prismaClient } from "@/database/prismaClient";
import { IAddressRepository } from "@/repositories/IAddressRepository";
import { Address } from "@/domain/entities/Address";

export class PrismaAddressRepository implements IAddressRepository{
  async create(address: Address):Promise<Address | null>{

    const addressCreate = await prismaClient.address.create({
      data: {
        id_profile:   address.props.idProfile, 
        cep:          address.props.cep,
        street:       address.props.street,
        number:       address.props.number,
        complement:   address.props.complement,
        state:        address.props.state,
        city:         address.props.city,
        neighborhood: address.props.neighborhood,
      },
    });
    
    return addressCreate ? Address.create(addressCreate, addressCreate.id):null
  }
  
}