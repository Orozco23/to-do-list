import { useState } from "react";
import useStore from "../store/useStore";
import Button from "./Button";
import InputTextArea from "./InputTextArea";
import { createTask } from "../fetch/Task.fetch";
import Swal from "sweetalert2";

export default function ModalCreate({ isOpen, toggleModal, setUpdate }) {
    const { user_email, token } = useStore()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState(null)

    const changeTitle = (e) => setTitle(e.target.value)
    const changeDescription = (e) => setDescription(e.target.value)

    const addTask = async () => {
        if (title.length > 0) {
            try {
                await createTask({
                    user_email,
                    token,
                    title,
                    description
                })
                setTitle('')
                setDescription(null)
                toggleModal()
                setUpdate()
            } catch (error) {
                console.error('Status', error.status)
            }
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'The title may not be blank',
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#F76C6A',
                background: '#2A2A2A',
                color: '#F79E89',
                iconColor: '#F76C6A'
            })
        }
    }

    return (
        <div>  
            {isOpen && (
                <div className="modal-panel">
                    <InputTextArea 
                        maxlength={50}
                        rows={3}
                        placeholder='Title'
                        id='title'
                        onChange={changeTitle}
                    />
                    <InputTextArea
                        maxlength={255}
                        rows={10}
                        placeholder='Description'
                        id='description'
                        onChange={changeDescription}
                    />
                    <Button 
                        event={addTask}
                        type='submit'
                        text='Add'
                        color='secondary-background' 
                        name='add'
                        id='add'
                    />
                    <Button 
                        event={toggleModal}
                        type='button'
                        text='Cancel'
                        color='primary-background' 
                        name='cancel'
                        id='cancel'
                    />
                </div>
            )}
        </div>
    )
}