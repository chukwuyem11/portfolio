/** @jsxImportSource @emotion/react */
import { css, cx } from "@emotion/react";
import facepaint from "facepaint";
import Image from 'next/image' 
 import Land from "./landingpage"
 import Body from "./body"


  const Home = () => {
       const breakpoints = [576, 768, 992, 1200];
  const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
  
  const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
      return(
          <div >
          <Land/>
          <Body />
          </div>
      )
  }

  export default Home