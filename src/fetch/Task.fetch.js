const apiUrl = import.meta.env.VITE_API_BASE_URL

// create a task
export const createTask = async ({ user_email, token, description, title }) => {
    try {
        const response = await fetch(
            `${apiUrl}tasks/create`,
            {
                method: 'POST',
                body: JSON.stringify({
                    user_email,
                    description,
                    title
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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

// gets a task according to the id
export const getTask = async ({ token, id }) => {
    try {
        const response = await fetch(
            `${apiUrl}tasks/${id}`,
            {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                }
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

// gets all tasks according to the applied filter
// the filters are: created at, title, is complete, 
// in ascending and descending order
// the '-' in '-title' indicates descending order
export const getList = async ({ token, limit, order, page }) => {
    try {
        const response = await fetch(
            `${apiUrl}tasks?limit=${limit}&order=${order}&page=${page}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
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

// marks the task as completed if it is not completed 
// or unchecks it if it is done
export const updateTask = async ({ token, id }) => {
    try {
        const response = await fetch(
            `${apiUrl}tasks/update/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
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

// deletes the task according to the id
export const deleteTask = async ({ token, id }) => {
    try {
        const response = await fetch(
            `${apiUrl}tasks/delete/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
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