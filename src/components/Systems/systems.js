import React from 'react';

import NewSystem from './NewSystem/newSystem';
import SystemItems from './SystemItems/systemItems';


class Systems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            systems: []
        };

        this.addSystem = this.addSystem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addSystem(newSystem) {
        this.setState((prevState) => ({
            systems: prevState.systems.concat(newSystem)
        }));
    }

    deleteItem(unwantedKey) {
        let filteredItems = this.state.systems.filter((item) => item.key !== unwantedKey);
        this.setState({
            systems: filteredItems
        });
    }

    render() {
        return (
            <div>
                <NewSystem onNewSystem={this.addSystem} />
                <SystemItems deleteItem={this.deleteItem} systems={this.state.systems} />
            </div>
        );
    }
}

export default Systems;