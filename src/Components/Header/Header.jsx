import React from 'react';
import BasicBar from './BasicBar';
import LineChart from './LineChart';
import MultiAxis from './MultiAxis';
import { Multitype } from './Multitype';

const Header = () => {
    return (
        <div className='w-full mt-10 p-5 flex justify-around flex-wrap bg-sidebarWhite'>
            <BasicBar />
            <LineChart />
            {/* <Multitype /> */}
            <MultiAxis />
        </div>
    );
}

export default Header;
