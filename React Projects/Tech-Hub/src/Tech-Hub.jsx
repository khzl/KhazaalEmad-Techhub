import { useState } from "react";

const TechHub = () => {
    const [name,setName] = useState('Hello From Tech - Hub Component');
    return(
    <div>{name}</div>
    );
    
};

export default TechHub;