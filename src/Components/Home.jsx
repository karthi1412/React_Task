import React from 'react';
import Basics from './Basics';
import Statetask from './Statetask';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import UseMemo from './UseMemo';
import MountingExample from './MountingExample';
import UpdatingExample from './UpdatingExample';


function Home() {
    return (
        <div>
            <Basics />
            <Statetask />
            <UseEffect />
            <UseRef />
            <UseMemo />
            <MountingExample />
            <UpdatingExample />
        </div>
    )
}

export default Home