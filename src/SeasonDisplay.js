import './SeasonDisplay.css';
import Spinner from './Spinner'
import React from 'react';
const SeasonConfig = {
    summer: {
        text : 'Lets hit the beach',
        iconName : 'sun'
    },
    winter: {
        text : 'Burr, it is Chilly',
        iconName : 'snowflake'
    },
}

const getSeason = (lat, month) => {
if (month >2 && month<9){
    return lat >0 ? 'summer' : 'winter';
}
else
{
    return lat >0 ? 'winter' : 'summer';
}

};


const SeasonDisplay = (props) => {
const season = getSeason(props.lat, new Date().getMonth());
const { text, iconName} = SeasonConfig[season];


console.log(season);
    if (props.lat==null){
        return <div><Spinner /></div>
    }
    else
    {
        return(
            <div className={`season-display ${season}`}>            
                <i className={`icon-left massive ${iconName} icon`} />         
                <h1>{text}</h1>               
                <i className={`icon-right massive ${iconName} icon`} />                              
            </div>
            
        );

    }
       


};

export default SeasonDisplay;