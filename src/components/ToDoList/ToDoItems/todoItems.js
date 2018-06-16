import React from 'react';
import "./todoItems.css";

class ToDoItems extends React.Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);

    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        let element = 
            <li key={item.key}>
                {item.text}
                <button onClick={() => this.delete(item.key)}>
                    Go to Azazel
                </button>
            </li>;
        return element;
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default ToDoItems;