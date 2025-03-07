import { create } from 'zustand'

// the login is returned a token, 
// which will be stored for use in all requests
// the email is stored to create the task
// removeAll is to be able to start with another email and token
const useStore = create((set) => ({
    token: '',
    updateToken: (newToken) => set({ token: newToken }),

    user_email: '',
    updateUserEmail: (newUserEmail) => set({ user_email: newUserEmail }),
    
    removeAll: () => set({ 
        user_email: '',
        token: ''
    })
}))

export default useStore