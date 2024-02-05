import { Router } from "express";
import { CreateProfileController } from "@/controllers/CreateProfileController";

const router = Router();

const createProfile = new CreateProfileController()

router.post('/profile', createProfile.execute)

export { router };