import React, { Component } from 'react'

class FormNote extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            created: '',
            description: '',
            priority: 'low'
        };
        this.handleValue = this.handleValue.bind(this);
        this.addNote = this.addNote.bind(this);
    }

    handleValue(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    addNote(e) {
        e.preventDefault();
        this.props.onAddNote(this.state);
        this.setState({
            title: '',
            created: '',
            description: '',
            priority: 'low'
        });
        //console.log(this.state);
    }

    render() {
        return (
            <div className="card mt-3">
                <div className="font-weight-bold card-header text-center">
                    NEW NOTE
                </div>
                <form className="card-body" onSubmit={this.addNote}>            
                    <div className="form-group">
                        <input type="text" name="title" value={this.state.title} className="form-control" onChange={this.handleValue} placeholder="Title note"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="created" value={this.state.created} className="form-control" onChange={this.handleValue} placeholder="Responsability"/>
                    </div>
                    <div className="form-group">
                        <textarea type="text" name="description"  value={this.state.description} rows="5" className="form-control" placeholder="Description note" onChange={this.handleValue}></textarea>
                    </div>
                    <div className="form-group">
                        <select type="text" name="priority" value={this.state.priority} className="form-control" onChange={this.handleValue}>
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-info btn-block">ADD</button>
                </form>
            </div>
        )
    }
}

export default FormNote;