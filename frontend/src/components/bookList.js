import React from 'react';

import './bookList.css';

/**
 * Book list selection react component
 * 
 * @version 0.1.0
 * @author Angela Galliat
 * @extends React.Component
 */
export default class BookList extends React.Component {
    /**
     * Render the component
     * @return {ReactElement} markup
     */
    render() {
        return (
            <div>
                <label>
                    <p>{this.props.label}</p>
                    <select id="bookListSelector" size="5" onChange={ (event) => { this.props.handleChange(event.target.value); } }>
                        {
                            this.props.data.map((item, index) => {
                                return <option value={index} key={index}>{item.title}</option>
                            })
                        }
                    </select>
                </label>
            </div>
        )
    }
}
