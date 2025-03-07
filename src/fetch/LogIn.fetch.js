const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const logIn = async (email) => {
    try {
        const response = await fetch(
            `${apiUrl}login`,
            {
                method: 'POST',
                body: JSON.stringify({
                    email
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )

        if (!response.ok) {
            throw { status: response.status, message: response.statusText }
        }
    
        return await response.json()
    } catch (error) {
        console.error('Failed to fetch tasks:', error)
        throw error
    }
}