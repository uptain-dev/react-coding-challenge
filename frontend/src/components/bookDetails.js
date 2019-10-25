import React from 'react';

import './bookDetails.css';

/**
 * Book details form react component
 * 
 * @version 0.1.0
 * @author Angela Galliat
 * @extends React.Component
 */
export default class BookDetails extends React.Component {

    state = {data: this.props.data}
    
    /**
     *  Called from the framework, immediately after updating occurs. This method is not called for the initial render.
     * @param {object} prevProps 
     */
    componentDidUpdate(prevProps) {
        const {data} = this.props;
        
        if(data !== prevProps.data) {
            this.setState({ data: data });
        }
    }

    /**
     * Render the component
     * @return {ReactElement} markup
     */
    render() {
        /*
        {
            "id": 1342,
            "authors": [
                {
                    "birth_year": 1775,
                    "death_year": 1817,
                    "name": "Austen, Jane"
                }
            ],
            "bookshelves": [
                "Best Books Ever Listings",
                "Harvard Classics"
            ],
            "download_count": 45668,
            "formats": {
                "text/plain; charset=utf-8": "http://www.gutenberg.org/files/1342/1342-0.txt",
                "application/pdf": "http://www.gutenberg.org/files/1342/1342-pdf.pdf",
                "application/rdf+xml": "http://www.gutenberg.org/ebooks/1342.rdf",
                "application/x-mobipocket-ebook": "http://www.gutenberg.org/ebooks/1342.kindle.noimages",
                "application/epub+zip": "http://www.gutenberg.org/ebooks/1342.epub.images",
                "text/plain; charset=us-ascii": "http://www.gutenberg.org/files/1342/1342.txt",
                "text/html; charset=utf-8": "http://www.gutenberg.org/files/1342/1342-h/1342-h.htm"
            },
            "languages": [
                "en"
            ],
            "media_type": "Text",
            "subjects": [
                "Fiction"
            ],
            "title": "Pride and Prejudice"
        } 
        */
        const {data} = this.state;
        return (
            <div>
                <form id="bookForm" onSubmit={ (event) => { this.props.handleUpdate(this.state.data); event.preventDefault(); } }>
                    <label form="bookForm" id="bookFormLabel">{this.props.label}</label>
                    <div className="formRow">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={this.state.data.title}
                            onChange={ (event) => {
                                    data.title = event.target.value;
                                    this.setState( {data: data} );
                                }
                            }
                        />
                    </div>
                    <div className="formRow">
                        <label htmlFor="authors">Authors:</label>
                        <div id="authors">
                            {
                                this.state.data.authors.map( (item, index) => {
                                    return (
                                        <div id="author" key={index}>
                                            <div>
                                            <label htmlFor="authorName">Name:</label>
                                            <input
                                                type="text"
                                                id="authorName"
                                                value={item.name}
                                                onChange={ (event) => {
                                                        data.authors[index].name = event.target.value;
                                                        this.setState( {data: data} );
                                                    }
                                                }
                                            />
                                            </div>
                                            <div>
                                            <label htmlFor="authorBirthYear">Birth year:</label>
                                            <input
                                                type="text"
                                                id="authorBirthYear"
                                                value={item.birth_year}
                                                onChange={ (event) => {
                                                        data.authors[index].birth_year = event.target.value;
                                                        this.setState( {data: data} );
                                                    }
                                                }
                                            />
                                            </div>
                                            <div>
                                            <label htmlFor="authorDeathYear">Death year:</label>
                                            <input
                                                type="text"
                                                id="authorDeathYear"
                                                value={item.death_year}
                                                onChange={ (event) => {
                                                        data.authors[index].death_year = event.target.value;
                                                        this.setState( {data: data} );
                                                    }
                                                }
                                            />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <input id="bookFormSubmit" type="submit" value="Update" />
                </form>
            </div>
        )
    }
}
