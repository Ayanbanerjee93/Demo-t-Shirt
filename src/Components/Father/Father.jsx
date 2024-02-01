import React from 'react';
import MySelf from '../Myself/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const  Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <MySelf ring={ring}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;