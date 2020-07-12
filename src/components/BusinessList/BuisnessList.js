import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
import { buildQueries } from '@testing-library/react';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        );
    }
};

export default BusinessList;
