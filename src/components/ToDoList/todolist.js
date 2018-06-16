import React from "react";

import ToDoItems from './ToDoItems/todoItems';
import "./todolist.css";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        e.preventDefault();
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value = "";

    }

    deleteItem(unwantedKey) {
        let filteredItems = this.state.items.filter((item) => item.key !== unwantedKey);
        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div>
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(task) => this._inputElement = task} placeholder="enter task">
                        </input>
                        <button type="submit">
                            Add item
                        </button>
                    </form>
                </div>
                <ToDoItems
                    entries={this.state.items}
                    delete={this.deleteItem} />
            </div>
        );
    }
}

export default ToDoList;