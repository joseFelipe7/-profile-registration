import { Profile } from "@/domain/entities/Profile";
type profileSnake = {
    accept_terms: number;
    type_person: string;
    name: string;
    email: string;
    document_number: string;
    cpf_responsible: string;
    phone?: string|null;
    cellphone: string;
}
export function profileToCamel(profile:profileSnake){
    return {
        acceptTerms: profile.accept_terms,
        typePerson: profile.type_person,
        name: profile.name,
        email: profile.email,
        documentNumber: profile.document_number,
        cpfResponsible: profile.cpf_responsible,
        phone: profile.phone??'',
        cellphone: profile.cellphone
    }
}