import React from 'react';
import Team2 from './Components/Team2';
import Team1 from './Components/Team1';

const Team = ({team}) => {
    return (
        <div>
            {
                team === 1  ? (
                    <Team1/>
                ) 
                : team === 2  ? (
                    <Team2/>
                )
                : team === 3  ? (
                    <Cover3/>
                )
                : team === 4  ? (
                    <Cover4/>
                )
                : team === 5  ? (
                    <Cover5/>
                )
                : team === 6  ? (
                    <Cover6/>
                )
                : team === 7  ? (
                    <Cover7/>
                )
                : team === 8  ? (
                    <Cover8/>
                )
                : team === 9  ? (
                    <Cover9/>
                )
                 : (<Team1/>)
            }
        </div>
    );
};

export default Team;