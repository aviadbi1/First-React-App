import React from 'react';

import NewSystem from './NewSystem/newSystem';
import SystemItems from './SystemItems/systemItems';


class Systems extends React.Component {

    render() {
        return (
            <div>
                <NewSystem />
                <SystemItems />
            </div>
        );
    }
}

export default Systems;