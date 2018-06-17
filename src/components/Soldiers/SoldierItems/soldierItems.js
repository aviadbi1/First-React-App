import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


class SoldierItems extends Component {

    constructor(props) {
        super(props);
        this.createTableEntry = this.createTableEntry.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }


    deleteItem(key) {
        this.props.deleteItem(key);
    }

    createTableEntry(soldier) {
        let element =
            <TableRow key={soldier.key}>
                <TableCell> {soldier.id} </TableCell>
                <TableCell> {soldier.name} </TableCell>
                <TableCell> {soldier.system} </TableCell>
                <Button variant="fab" mini  onClick={() => this.deleteItem(soldier.key)}>
                    <DeleteIcon />
                </Button>
            </TableRow>;
        return element;
    }

    render() {
        let mapping = this.props.soldiers;
        let soldiers = mapping.map(this.createTableEntry);
        return (
            <Paper>
                <Table>
                    <TableHead key="headers">
                        <TableRow>
                            <TableCell> ID </TableCell>
                            <TableCell> Name </TableCell>
                            <TableCell> System </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {soldiers}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default SoldierItems;