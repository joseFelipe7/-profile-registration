import { Entity } from "../../core/Entity";

type AddressProps = {
  idProfile?:    number; 
  cep:          string;
  street:       string;
  number:       string;
  complement:   string;
  state:        string;
  city:         string;
  neighborhood: string;
};

export class Address extends Entity<AddressProps> {
  private constructor(props: AddressProps, id?: string) {
    super(props, id);
  }

  static create(props: AddressProps, id?: string) {
    const address = new Address(props, id);

    return address;
  }
}