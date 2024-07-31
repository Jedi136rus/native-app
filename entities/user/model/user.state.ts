import { User } from "./user.modal";
import { atom } from "jotai";

export const profileAtom = atom<UserState>({
    profile: {
        id: 1,
        name: 'Петр'
    },
    isLoading: false,
    error: null,
})

export interface UserState {
    profile: User | null;
    isLoading: boolean;
    error: string | null;
}