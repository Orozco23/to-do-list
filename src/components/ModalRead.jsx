import Button from "./Button";

export default function ModalRead({ isOpen, toggleModal, title, description }) {
    return (
        <div>  
            {isOpen && (
                <div className="modal-panel">
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                    <Button 
                        event={toggleModal}
                        type='button'
                        text='Close'
                        color='secondary-background' 
                        name='close'
                        id='close'
                    />
                </div>
            )}
        </div>
    )
}