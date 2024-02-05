import { Entity } from "../../core/Entity";

type ProfileProps = {
  acceptTerms: number;
  typePerson: string;
  name: string;
  email: string;
  documentNumber: string;
  cpfResponsible: string;
  phone: string;
  cellphone: string;
};

export class Profile extends Entity<ProfileProps> {
  private constructor(props: ProfileProps, id?: number) {
    super(props, id);
  }

  static create(props: ProfileProps, id?: number) {
    const profile = new Profile(props, id);

    return profile;
  }
}