import React,{Component} from 'react';
import Navbar from './components/Navbar'
import { notes } from './notes.json';
import FormNote from './components/FormNote'


class App extends Component {

  constructor(){
    super();
    this.state = {
      notes
    };
    this.handleAddNote = this.handleAddNote.bind(this);
  }

  handleAddNote(note) {
    this.setState({
      notes: [...this.state.notes, note]
    });
  }

  removeNote(idx) {
    this.setState({
      notes: this.state.notes.filter((e, i) => {
        return i !== idx;
      })
    })
  }

  render() {
    const notes = this.state.notes.map((note, i) => {
      return(
        <div className="col-md-4 mt-3">
          <div className="card text-center ">
            <div className="card-header text-light bg-dark">
              <p className="text-uppercase">{note.title}</p>
              <span className="badge badge-info py-1 px-3">{note.priority}</span>
            </div>
            <div className="card-body">
              <div>
                {note.description}
              </div>
              <div>
                <strong>{note.created}</strong>
              </div>  
            </div>
            <div className="card-footer">
              <button className="btn btn-danger btn-block btn-sm" onClick={this.removeNote.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div>
        {/* COMMENT */}
          <Navbar length={this.state.notes.length}/> 
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-4">
                <FormNote onAddNote={this.handleAddNote}/>
              </div>
              <div className="row col-md-8">
                {notes}
              </div>
            </div>
          </div>
          
      </div>
    );
  }
}

export default App;
