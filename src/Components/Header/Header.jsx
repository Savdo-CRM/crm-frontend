import React from 'react';
import BasicBar from './BasicBar';
import LineChart from './LineChart';
import MultiAxis from './MultiAxis';
import { Multitype } from './Multitype';

const Header = () => {
    return (
        <div className='w-full p-5 pt-20 flex justify-around flex-wrap bg-sidebarWhite'>
            <BasicBar />
            <LineChart />
            {/* <Multitype /> */}
            <MultiAxis />
        </div>
    );
}

export default Header;
