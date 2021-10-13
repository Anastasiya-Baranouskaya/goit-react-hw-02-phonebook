import { Component } from 'react';


export class ContactListItem extends Component{
    render() {
        const { name, number, id, onDeleteContact } = this.props;
        return (
            <li>
                <span>{name}:</span>
                <span>{number}:</span>
                <button type="button" id={id} onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
        );
}
}