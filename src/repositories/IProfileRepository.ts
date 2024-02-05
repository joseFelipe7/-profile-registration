import { Address } from "@/domain/entities/Address";
import { Profile } from "../domain/entities/Profile";

export interface IProfileRepository {
  createProfile(profile: Profile, address?:Address): Promise<Profile | null>;
  findByDocument(document:string): Promise<Profile | null>
}