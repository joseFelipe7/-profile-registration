import { Address } from "../domain/entities/Address";

export interface IAddressRepository {
  create(address: Address): Promise<Address | null>;
}