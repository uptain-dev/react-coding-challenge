import React from "react";
import axios from "axios";

class BookItem extends React.Component {
  state = {
    listItemToEdit: null
  };

  toggleListEdit = (index, item) => {
    if (!this.props.editable) return;
    this.setState({
      listItemToEdit: { index, item }
    });
  };

  editListItem = event => {
    this.setState({
      listItemToEdit: {
        ...this.state.listItemToEdit,
        item: event.target.value
      }
    });
  };

  saveList = () => {
    let newValue = null,
      keyToChange = null;

    if (this.props.arr) {
      newValue = [...this.props.arr];
      keyToChange = this.props.arrKey;

      newValue.splice(
        this.state.listItemToEdit.index,
        1,
        this.state.listItemToEdit.item
      );
    }

    if (!this.props.arr && !this.props.obj) {
      newValue = this.state.listItemToEdit.item;
      keyToChange = this.props.itemKey;
    }

    axios
      .patch(`/books/${this.props.data.id}`, {
        [keyToChange]: newValue
      })
      .then(response => {
        this.props.editBooks(response.data);
      });

    this.setState({
      listItemToEdit: null
    });
  };

  render() {
    const { title, arr, obj, value } = this.props;
    const checkListItem = value => {
      return (
        this.state.listItemToEdit && this.state.listItemToEdit.index === value
      );
    };

    return (
      <div>
        <p>{title}</p>
        {arr && (
          <ul>
            {arr.map((item, index) => {
              if (checkListItem(index)) {
                return (
                  <li key={index}>
                    <input
                      value={this.state.listItemToEdit.item}
                      onChange={this.editListItem}
                    ></input>
                    <button onClick={this.saveList}>Save</button>
                  </li>
                );
              }
              return (
                <li
                  onClick={() => this.toggleListEdit(index, item)}
                  key={index}
                >
                  {value ? item[value] : item}
                </li>
              );
            })}
          </ul>
        )}
        {obj && (
          <ul>
            {Object.entries(obj).map((item, index) => (
              <li key={index}>
                {item[1]} <strong>{item[0]}</strong>
              </li>
            ))}
          </ul>
        )}
        {!arr &&
          !obj &&
          (checkListItem(this.props.itemKey) ? (
            <div>
              <input
                type="text"
                value={this.state.listItemToEdit.item}
                onChange={this.editListItem}
              />
              <button onClick={this.saveList}>Save</button>
            </div>
          ) : (
            <span
              onClick={() => this.toggleListEdit(this.props.itemKey, value)}
            >
              {value}
            </span>
          ))}
      </div>
    );
  }
}

export default BookItem;
