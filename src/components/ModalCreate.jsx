import Button from "./Button";
import InputTextArea from "./InputTextArea";

export default function ModalCreate({ isOpen, toggleModal }) {
    return (
        <div>  
            {isOpen && (
                <div className="modal-panel">
                    <InputTextArea 
                        maxlength={50}
                        rows={3}
                        placeholder='Title'
                        name='title'
                        id='title'
                    />
                    <InputTextArea
                        maxlength={255}
                        rows={10}
                        placeholder='Description'
                        name='description'
                        id='description'
                    />
                    <Button 
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