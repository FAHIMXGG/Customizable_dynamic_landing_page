import React, { useEffect, useState } from 'react';
import Header from '../components/dashboard/Header';
import Footer from '../components/Footer/Footer';
import Pricing from '../components/Pricing/Pricing';
import Testimonial from '../components/Testimonial/Testimonial';
import Team from '../components/Team/Team';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';

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
            <Testimonial testimonial={data[0]?.testimonial} />
            <Team team={data[0]?.team} />
            <Blog blog={data[0]?.blog}/>
            <Contact contact={data[0]?.contact} />
            <Footer footer={data[0]?.footer} />
        </div>
    );
};

export default TestHome;