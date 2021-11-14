import { writable } from 'svelte/store';

const initialValue = {
    user: 'peppo',
    password: 'baudo',
    isLogged: false,
};

function createAuth() {
    const {subscribe, set, update} = writable(initialValue);

    return {
        subscribe, 
        login: () => {
            update(auth => {
                console.log(auth);
                return {
                    ...auth,
                    isLogged: true
                }
            });
        },
        logout: () => set(initialValue)
    }
}

export const authStore = createAuth();


