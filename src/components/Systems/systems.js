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
    }

    addSystem(newSystem) {
        this.setState((prevState) => ({
            systems: prevState.systems.concat(newSystem)
        }));
    }

    render() {
        return (
            <div>
                <NewSystem onNewSystem={this.addSystem} />
                <SystemItems systems={this.state.systems} />
            </div>
        );
    }
}

export default Systems;