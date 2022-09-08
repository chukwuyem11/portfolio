import { css, cx } from "@emotion/react";
import facepaint from "facepaint";
import Image from 'next/image' 
 import Land from "./landingpage"
 import Body from "./body"


  const Home = () => {
       
      return(
          <div >
          <Land/>
          <Body />
          </div>
      )
  }

  export default Home