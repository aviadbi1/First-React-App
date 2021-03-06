import React from 'react';

import SystemStore from '../../../stores/systemStore';
import MultipleSelect from './multiselect';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


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
        let systems = SystemStore.getAllItems();
        let systemsAsMenuItems = systems.map(system => (
            <MenuItem key={system.key} value={system.name}>
                {system.name}
            </MenuItem>
        ));
        let choosenSystem = "";
        return (
            <div>
                <h3>Add A Soldier</h3>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField required='true' label="ID" name="id" margin="normal" type="number" />
                    <TextField required="true" label="Name" name="name" margin="normal" />
                    {/* <TextField required="true" label="System" name="system" margin="normal" /> */}
                    <TextField
                        select
                        label="System"
                        name="system"
                        helperText="Please select your system"
                        margin="normal"
                        value={choosenSystem}
                    >
                        {systemsAsMenuItems}
                    </TextField>
                    
                    <Button variant="fab" mini color="secondary" aria-label="add" type="submit">
                        <AddIcon />
                    </Button>
                </form>
                <br/>
                <br/>
                <MultipleSelect/>
            </div>
        );
    }
}

export default NewSoldier;