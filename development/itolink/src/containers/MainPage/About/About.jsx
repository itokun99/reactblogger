import React, {useState} from 'react';
import Content from '../../Template/Content/Content';

const About = () => {
  const [count, setCount] = useState(0);


  return(
    <div className="AboutSection">
     <p>Count Fuck : {count}</p>
     <button onClick={() => setCount(count + 1)}>Fuck Me</button> 
    </div>
  )
}

export default Content(About);