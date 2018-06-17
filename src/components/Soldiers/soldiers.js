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
        this.deleteItem = this.deleteItem.bind(this);
    }

    addSoldier(newSoldier) {
        this.setState((prevState) => ({
            soldiers: prevState.soldiers.concat(newSoldier)
        }));
    }

    deleteItem(unwantedKey) {
        let filteredItems = this.state.soldiers.filter((item) => item.key !== unwantedKey);
        this.setState({
            soldiers: filteredItems
        });
    }

    render() {
        return (
            <div>
                <NewSoldier onNewSoldier={this.addSoldier} />
                <SoldierItems deleteItem={this.deleteItem} soldiers={this.state.soldiers} />
            </div>
        );
    }
}

export default Soldiers;