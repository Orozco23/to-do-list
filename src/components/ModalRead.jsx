import Button from "./Button";

export default function ModalRead({ isOpen, toggleModal, title, description, created_at }) {
    return (
        <div>  
            {isOpen && (
                <div className="modal-panel">
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                    <h5>{created_at.slice(0,10)}</h5>
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