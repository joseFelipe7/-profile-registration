import { Profile } from "@/domain/entities/Profile";

export class ProfileResponse {
  accept_terms: number;
  type_person: string;
  name: string;
  email: string;
  document_number: string;
  cpf_responsible: string;
  phone: string;
  cellphone: string;

  constructor(profile:Profile){
    this.accept_terms    = profile.props.acceptTerms
    this.type_person     = profile.props.typePerson
    this.name            = profile.props.name
    this.email           = profile.props.email
    this.document_number = profile.props.documentNumber
    this.cpf_responsible = profile.props.cpfResponsible
    this.cellphone       = profile.props.cellphone
    this.phone           = profile.props.phone

  }
  static collection(profiles:Array<Profile>):Array<any>{
    return profiles.map(item=>{
      return {
        accept_terms: item.props.acceptTerms,
        type_person: item.props.typePerson,
        name: item.props.name,
        email: item.props.email,
        document_number: item.props.documentNumber,
        cpf_responsible: item.props.cpfResponsible,
        cellphone: item.props.cellphone,
        phone: item.props.phone,
        
      }
    })
  }
  static paginate(listProfile:Array<any>, page:number, perPage:number){
    const [total, list] = listProfile
    const meta = {
      total:total,
      page:page,
      per_page:perPage,
      first_page:1,
      last_page:Math.ceil(total/perPage)
    }
    const data = list
    return {
      meta,
      data
    }
  }
}