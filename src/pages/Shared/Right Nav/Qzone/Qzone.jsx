import React from 'react';
import qz1 from '../../../../../assets/qZone1.png'
import qz2 from '../../../../../assets/qZone2.png'
import qz3 from '../../../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-secondary bg-opacity-25 p-3'>
            <h2>Q Zoon</h2>
            <div className='d-flex flex-column gap-3'>
                <img src={qz1} alt="" />
                <img src={qz2} alt="" />
                <img src={qz3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;