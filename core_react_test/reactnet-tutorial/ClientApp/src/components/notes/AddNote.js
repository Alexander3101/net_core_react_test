import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

const AddNote = (showModal, {closeModal}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const postData = () => {
        axios.post(`/api/notes`, {
            title,
            description
        })
        showModal.closeModal();
    };
    
    return (
        <Modal show={showModal.showModal} 
        onHide={() => showModal.closeModal()} 
        backdrop="static" 
        keyboard={false} 
        aria-labelledby="contained-modal-title-vcenter" 
        centered>
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Добавление записи</Modal.Title>
              </Modal.Header>

              <Modal.Body> 
                <Form>
                    <Form.Group>
                        <div>
                            <label>Наименование</label>
                            <input onChange={(e) => setTitle(e.target.value)} placeholder='Наименование' />
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div>
                            <label>Описание</label>
                            <input onChange={(e) => setDescription(e.target.value)} placeholder='Описание' />
                        </div>
                    </Form.Group>
                </Form>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={() => postData()} type='submit'>Сохранить</Button>
                <Button variant="secondary" onClick={() => showModal.closeModal()}>Закрыть</Button>
              </Modal.Footer>
            </Modal.Dialog>
        </Modal>

    )
};


export default AddNote;