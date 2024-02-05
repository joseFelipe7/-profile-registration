import joi from "joi"

export default joi.object().keys({
                    type_person:joi.string().valid('PF', 'PJ').required(),
                    accept_terms:joi.number().valid(1).required(),
                    document_number: joi.string().when('type_person', {
                        is: 'PF',
                        then: joi.string().length(11).required(),
                        otherwise: joi.string().length(14).required()
                    }),
                    name: joi.string().required(),
                    email:joi.string().required(),
                    cpf_responsible: joi.string().required(),
                    phone: joi.string(),
                    cellphone: joi.string().required(),
                    address: joi.object({
                        cep: joi.string().length(8).required(),
                        street: joi.string().required(),
                        number: joi.string().required(),
                        state: joi.string().required(),
                        city: joi.string().required(),
                        neighborhood: joi.string().required(),
                        complement: joi.string(),
                    }).required(),
        })