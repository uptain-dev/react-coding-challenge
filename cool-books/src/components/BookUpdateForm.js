import React, { Component } from 'react';
import axios from 'axios';
import './BookUpdateForm.css';

class BookForm extends Component {
  constructor(props) {
    super(props);    

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleObjectChange = this.handleObjectChange.bind(this);
  }

  UNSAFE_componentWillReceiveProps(props) {
    if(props.book===undefined){
      return;
    } else {
      this.setState(props.book);
    }
  }

  handleChange(e){
    if(e.target.name==="name"){
      this.setState({        
        authors: [{          
          ...this.state.authors[0],[e.target.name]: e.target.value}]
      });
    } else if(e.target.name==="birth_year" || e.target.name==="death_year"){
      this.setState({        
        authors: [{          
          ...this.state.authors[0],[e.target.name]: Number(e.target.value)}]
      });
    } else if(e.target.name==="download_count"){
      this.setState({[e.target.name]: Number(e.target.value)});
    } else {
      this.setState({[e.target.name]: e.target.value});
    }
  }

  handleObjectChange(e){
    this.setState({
      formats: {...this.state.formats, [e.target.name] : e.target.value}
    });
  }

  handleSubmit(e){
    this.state.subjects = typeof this.state.subjects==="object" ? this.state.subjects : this.state.subjects.split(",");
    this.state.bookshelves = typeof this.state.bookshelves==="object" ? this.state.bookshelves : this.state.bookshelves.split(",");
    this.state.languages = typeof this.state.languages==="object" ? this.state.languages : this.state.languages.split(",");
    
    const patch = this.state;

    axios.patch('http://localhost:3010/books/' + this.state.id, patch)
    .then(window.alert("Book Successfully Updated, the page will reload to fetch all the new changes."))
    .catch(err => console.log(err));    
  }
  

  render() {

    if(this.props.book === undefined) {
      return <div></div>
    } else {
      return(
        <form className="book-form" onSubmit={this.handleSubmit}>
          <div className="book">
            <h1>{this.state.title}</h1>
          <button className="button" type="submit">Update Data</button>
            <div className="book-title">
              Title: <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
            </div>
            <div className="book-subjects">
              Subjects: <input type="text" name="subjects" value={this.state.subjects} onChange={this.handleChange}/>
            </div>  
            <div className="book-authors">
              <div className="author-name">
                Author Name: <input type="text" name="name" value={this.state.authors[0].name} onChange={this.handleChange}/>
              </div>
              <div className="author-birth">
                Author Birthday: <input type="number" name="birth_year" value={this.state.authors[0].birth_year} onChange={this.handleChange}/>
              </div>
              <div className="author-death">
                Author Death: <input type="number" name="death_year" value={this.state.authors[0].death_year} onChange={this.handleChange}/>
              </div>     
              <div className="bookshelves">
                Bookshelves: <input type="text" name="bookshelves" value={this.state.bookshelves} onChange={this.handleChange}/>
              </div>  
              <div className="language">
                Languages: <input type="text" name="languages" value={this.state.languages} onChange={this.handleChange}/>
              </div>         
              <div className="media-type">
                Media Type: <input type="text" name="media_type" value={this.state.media_type} onChange={this.handleChange}/>
              </div>     
              <div className="download-count">
                Download Count: <input type="number" name="download_count" value={this.state.download_count} onChange={this.handleChange}/>
              </div>
              <div className="formats">
                Formats: 
                <ul>{Object.keys(this.state.formats).map((key, index)=>
                  <li key={index}>{key}: <input type="text" name={key} value={this.state.formats[key]} onChange={this.handleObjectChange}/> </li>
                )}
            </ul>
          </div>          
            </div>          
          </div>
        </form>
      )
    }  
  }
}

export default BookForm;
