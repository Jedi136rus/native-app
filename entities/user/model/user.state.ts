import axios, { AxiosError } from "axios";
import { authAtom } from "../../auth/model/auth.state";
import { User } from "./user.modal";
import { atom } from "jotai";
import { API } from "../api/api";

export const profileAtom = atom<UserState>({
    profile: null,
    isLoading: false,
    error: null,
})

export const loadProfileAtom = atom(
    async (get) => {
        return get(profileAtom);
    },
    async (get, set) => {
        const { access_token } = await get(authAtom);
        set(profileAtom, {
            isLoading: true,
            profile: null,
            error: null
        })
        try {
            const { data } = await axios.get<User>(API.profile, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            });
            set(profileAtom, {
                isLoading: false,
                profile: data.profile,
                error: null
            })
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error.response?.data.message)
                set(profileAtom, {
                    isLoading: false,
                    profile: null,
                    error: error.response?.data.message
                })
            }
        }  
    }
)

export interface UserState {
    profile: User | null;
    isLoading: boolean;
    error: string | null;
}