import React from 'react';

/**
 * Book subject selection react component
 * 
 * @version 0.1.0
 * @author Angela Galliat
 * @extends React.Component
 */
export default class SubjectSelection extends React.Component {
    /**
     * Render the component
     * @return {ReactElement} markup
     */
    render() {
        return (
            <div>
                <label htmlFor="subject">{this.props.label}</label>
                <select id="subject" onChange={ (event) => { this.props.handleChange(event.target.value); } }>
                    <option value="-1" key="-1">-----</option>
                    {
                        this.props.data.map((item, index) => {
                            return <option value={index} key={index}>{item}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}
