import React from 'react';

import NewSoldier from './NewSoldier/newSoldier';
import SoldierItems from './SoldierItems/soldierItems';


class Soldiers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            soldiers: []
        };

        this.addSoldier = this.addSoldier.bind(this);
    }

    addSoldier(newSoldier) {
        this.setState((prevState) => ({
            soldiers: prevState.soldiers.concat(newSoldier)
        }));
    }

    render() {
        return (
            <div>
                <NewSoldier onNewSoldier={this.addSoldier} />
                <SoldierItems soldiers={this.state.soldiers} />
            </div>
        );
    }
}

export default Soldiers;