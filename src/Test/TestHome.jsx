import React, { useEffect, useState } from 'react';
import Header from '../components/dashboard/Header';
import Footer from '../components/Footer/Footer';
import Pricing from '../components/Pricing/Pricing';

const TestHome = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        fetch('http://localhost:3000/headers')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);
    console.log(data[0]?.header)
    return (
        <div>
            <Header header={data[0]?.header} />
            <Pricing pricing={data[0]?.pricing}/>
            <Footer footer={data[0]?.footer} />
        </div>
    );
};

export default TestHome;