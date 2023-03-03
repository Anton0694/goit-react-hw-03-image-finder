import { Component } from 'react'
import { createPortal } from 'react-dom';
import {Overlay, ModalBox} from './Modal.styled'

const modalRoot = document.querySelector('#modal-root')
export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown )
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
            if (e.code === 'Escape') {
                this.props.closeModal();
        }
    }

    render() {
        const { onModalClick, data } = this.props
        return createPortal (
            <Overlay onClick={(event) => {onModalClick(event)}}>
                <ModalBox>
                   <img src={data.largeImageURL} alt={data.largeImageURL} />
                </ModalBox>
            </Overlay>,
            modalRoot,
        );
    }
    
};