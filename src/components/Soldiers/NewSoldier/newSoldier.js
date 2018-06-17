import React from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';


class NewSoldier extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();

        let id = e.target.id.value;
        let name = e.target.name.value;
        let system = e.target.system.value;

        let newSoldier = {
            key: Date.now(),
            id: id,
            name: name,
            system: system
        };

        this.props.onNewSoldier(newSoldier);
    }

    render() {
        return (
            <div>
                <h3>Add A Soldier</h3>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField required="true" type="number" label="ID" name="id" margin="normal" />
                    <TextField required="true" label="Name" name="name" margin="normal" />
                    <TextField required="true" label="System" name="system" margin="normal" />
                    <Button variant="fab" mini color="secondary" aria-label="add" type="submit">
                        <AddIcon />
                    </Button>
                </form>
            </div>
        );
    }
}

export default NewSoldier;