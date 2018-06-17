import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

class NewSystem extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();

        let name = e.target.name.value;
        let po = e.target.po.value;
        let url = e.target.url.value;

        let newSystem = {
            key: Date.now(),
            name: name,
            po: po,
            url: url
        };

        this.props.onNewSystem(newSystem);
    }

    render() {
        return (
            <div>
                <h3>Add A System</h3>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField label="Name" name="name" margin="normal" />
                    <TextField label="PO" name="po" margin="normal" />
                    <TextField label="URL" name="url" margin="normal" />
                    <Button variant="fab" mini color="secondary" aria-label="add" type="submit">
                        <AddIcon />
                    </Button>
                </form>
            </div>
        );
    }
}

export default NewSystem;