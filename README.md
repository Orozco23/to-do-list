## <center>TO DO LIST APP</center>

To-do list app is an application where you can create tasks, to check them as done, filter them by time created, title, is completed.

You can log in with your email and the tasks will be associated with your email address. 

--- 
### Summary
---

* [**TECHNOLOGIES**](#technologies) 
    > Defines the technologies used

* [**ENVIRONMENT VARIABLE**](#environment-variable)
    > Define .env file

* [**RUN APP**](#run-app)
    > Define how to run

* [**FILE STRUCTURE**](#file-structure)
    > Define the structure

* [**ENDPOINTS**](#endpoints)
    > Define the endpoints


<a id="technologies"></a> 

### **TECHNOLOGIES**

* **Vite**

    * This project was created with vite, with the command:

        `npm create vite@latest`
        
<br>

* **bootstrap-icons:** to insert icons
    * Added classes for custom color and size
        ```jsx
            <i className="bi bi-caret-right icon-larger secondary-color" />

* **react-tooltip:** to add tooltips to icons

    ```jsx
        import { Tooltip } from 'react-tooltip'
        
        <i 
            data-tooltip-id="create"
            data-tooltip-content="Add a task"
            className="bi bi-plus-circle-fill" 
        />
        <Tooltip id="create" />

* **zustand:** to manage the status
    * useStore:

        ```js
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
    
    * Import:

        ```js
        import useStore from '../store/useStore';
        const { updateToken, updateUserEmail, token, user-email, removeAll } = useStore()

* **react-router-dom:** to manage the routes

    ```jsx
        import { BrowserRouter, Routes, Route } from "react-router-dom";

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LogIn />}/>
                <Route path='/to-do' element={<ListOfToDo />}/>
            </Routes>
        </BrowserRouter>

* **sweetalert2:** to show alerts

    ```js
        Swal.fire({
            title: 'Error!',
            text: 'Invalid email',
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#F76C6A',
            background: '#2A2A2A',
            color: '#F79E89',
            iconColor: '#F76C6A'
        })

<br>

<a id="environment-variable"></a>
### **ENVIRONMENT VARIABLE**

* To facilitate the management of the API base URL, an environment variable was used

    * .env

        `VITE_API_BASE_URL=https://gsi-interviews.camiapp.net/to-do/`

    * Import
        `const apiUrl = import.meta.env.VITE_API_BASE_URL`

<br>

<a id="Run app"></a>
### Run app

* install the dependencies

    `npm install`

* run

    `npm run dev`

<br>

<a id="file-structure"></a>
### File structure

* All the code is inside the src folder
* inside we find the following folders
    * components: all reusable components
    * fetch: the requests as a function so that they can be reused
    * pages: with the components the pages were assembled
    * routes: contains the routing file
    * store: to manage the states with Zustand, contains the useStore file
* and the files
    * App.css
    * App.jsx
    * index.js
    * main.jsx
* the styles were created with css

<br>

<a id="endpoints"></a>
### **ENDPOINTS**

* For more information, please consult [To Do List APIS](https://github.com/Orozco23/to-do-list/blob/develop/enterview-gsi-endpoints.md)
