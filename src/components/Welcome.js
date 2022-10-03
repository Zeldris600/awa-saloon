import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";

const Welcome = () => { 
  return (
    <React.Fragment>
      <Header />
      <div>Welcome</div>
    </React.Fragment>
  );
};

export default Welcome;
