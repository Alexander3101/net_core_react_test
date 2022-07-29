import React, { Component } from 'react';
import Create from './notes/create';

export class FetchNotes extends Component {
  static displayName = FetchNotes.name;

  constructor(props) {
    super(props);
    this.state = { notes: [], loading: true };
  }

  componentDidMount() {
    this.populateNotesData();
  }

  static renderCreateNote() {
    return (
      <div>
        <Create/>
      </div>
    );
  }

  static renderNotesTable(notes) {
    return (
    <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
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
    let createNote = this.state.loading
      ? <p><em>Loading Create form</em></p>
      : FetchNotes.renderCreateNote();

    let contents = this.state.loading
      ? <p><em>Loading table... Please stand by</em></p>
      : FetchNotes.renderNotesTable(this.state.notes);

    return (
      <div>
        <h1 id="tabelLabel" >Notes</h1>
        <p>This component demonstrates fetching notes data from the server.</p>
        {createNote}
        {contents}
      </div>
    );
  }

  async populateNotesData() {
    const response = await fetch('/api/notes');
    const data = await response.json();
    this.setState({ notes: data, loading: false });
  }
}
