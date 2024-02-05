import { Request, Response } from "express";
import { ProfileResponse } from "@/response/ProfileResponse";
import createProfileRequest from "@/validators/createProfileRequest";
import { createProfileFactory } from "@/useCases/factories/createProfileFactory";

export class CreateProfileController {
    execute = async (request:Request, response:Response) => {

      const validate = createProfileRequest.validate(request.body)
       
      if(validate.error) return response.status(422).json({ 
                                                            errors:validate.error.details, 
                                                            message:'Invalid data'
                                                          })
                                                          
      try {
        const requestData = validate.value
        
        const createProfile = createProfileFactory()

        const profile = await createProfile.execute(requestData)
        if(profile){
          response.status(201).json({data: new ProfileResponse(profile)});
        }else{
          response.status(400).json({data: 'ocorreu um erro'});
        }
        
      } catch (error: any) {
        return response.status(400).json({message:error.message})

      }
        
    }
  }