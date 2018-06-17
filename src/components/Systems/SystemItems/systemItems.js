import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


class SystemItems extends Component {

    constructor(props) {
        super(props);
        this.createTableEntry = this.createTableEntry.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(key) {
        this.props.deleteItem(key);
    }
    
    createTableEntry(system) {
        let element =
            <TableRow key={system.key}>
                <TableCell> {system.name} </TableCell>
                <TableCell> {system.po} </TableCell>
                <TableCell> {system.url} </TableCell>
                <Button variant="fab" mini  onClick={() => this.deleteItem(system.key)}>
                    <DeleteIcon />
                </Button>
            </TableRow>;
        return element;
    }

    render() {
        let mapping = this.props.systems;
        let systems = mapping.map(this.createTableEntry);
        return (
            <Paper>
                <Table>
                    <TableHead key="headers">
                        <TableRow>
                            <TableCell> Name </TableCell>
                            <TableCell> PO </TableCell>
                            <TableCell> URL </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {systems}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default SystemItems;