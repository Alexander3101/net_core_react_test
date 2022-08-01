import React, { Component } from 'react';
import AddNote from './notes/AddNote';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useContext, useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Edit';

export class FetchNotes extends Component {
  static displayName = FetchNotes.name;
   
  //const handleShowAlert = () =>setShowAlert(true);

  constructor(props) {
    super(props);
    this.state = { notes: [], loading: true, showModal : false };
  }

  openModal = () => this.setState({ showModal: true });

  closeModal = () => this.setState({ showModal: false});

  componentDidMount() {
    this.populateNotesData();
  }

  static renderNotesTable(notes) {
    return (
    <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          {notes.map(note =>
            <tr key={note.id}>
              <td>{note.title}</td>
              <td>{note.description}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    // const handleShow = () => this.state.show = true;
    // const handleClose = () => this.state.show = false;

    let contents = this.state.loading
      ? <p><em>Загрузка таблицы, пожалуйста, подождите...</em></p>
      : FetchNotes.renderNotesTable(this.state.notes);

    return (
    
      <>
      <div>
        <h1 id="tabelLabel" >Заметки</h1>
        <p>Данный компонент используется в целях демонстрации получения данных из таблицы Notes.</p>
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Управление заметками</h2>
                </div>
                <div className="col-sm-6">
                    <Button onClick={this.openModal} className="btn btn-success" data-toggle="modal"><i className="material-icons"><AddIcon></AddIcon></i> <span>Добавить заметку</span></Button>					
                </div>
            </div>
        </div>

        <AddNote showModal={this.state.showModal} closeModal={this.closeModal}></AddNote>
        {contents}
      </div>
      </>
    );
  }

  async populateNotesData() {
    const response = await fetch('/api/notes');
    const data = await response.json();
    this.setState({ notes: data, loading: false });
  }
}
