import React, { useState } from "react";

/** @jsxImportSource @emotion/react */
import { css, cx } from "@emotion/react";
import facepaint from "facepaint";
import Image from 'next/image' 
import { motion, AnimatePresence  } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";



  const Land = () => {
    const [modalopen, setModalopen] = useState(false)
       const breakpoints = [576, 768, 992, 1200];
  const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
  
  const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
      return(
          <div css={mq({
            backgroundColor: "#000",
            height: ["auto","auto","auto","100vh"],
          })}>
              
              <div css={mq({
            display: "flex",
            justifyContent: "center"
        })}>
            <div css={mq({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: ["90%","90%","90%","80%"],
           paddingTop: 10,
           paddingBottom: 10,
            marginLeft: 10,
            marginRight: 10
        })}>
            <div css={mq({
                flex: "20%",
                
            })}>
                <img src="logo.webp" css={mq({
                    width: [40,80,60],
                    marginLeft: [10, 0, 0],
                    height: "auto"
                })}/>
            </div>
            <div css={mq({
    flex: "50%",
    display: ["none", "block", "block"],
    
})}>
    <div css={mq({
        display: "flex",
        justifyContent: "space-evenly"
    })}>
<div css={mq({
    color: "#fff",
    fontSize:[17,20],
    textTransform: "capitalize",
    fontWeight:300,
   
})}>about</div>
<div css={mq({
    color: "#fff",
    fontSize:[17,20],
    textTransform: "capitalize",
    fontWeight:300,
   
})}>portfolio</div>
<div css={mq({
    color: "#fff",
    fontSize:[17,20],
    textTransform: "capitalize",
    fontWeight:300,
   
})}>contact</div>
</div>
      </div>
            <div css={mq({
              display: ["block", "none", "none"],
              fontSize: 30
            })} onClick={() => setModalopen(!modalopen)}>
            <BiMenuAltRight  color="#ffffff"/>
            </div>
            <AnimatePresence>
                    {modalopen &&
                    
                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0,  y: 20}} css={mq({
                        position: "relative"
                    })}>
                        <div css={mq({
                        position: "absolute",
                        top: 0,
                        right: 30,
                        width: 200,
                        borderRadius: 5,
                        backgroundColor: "hsla(232, 90%, 59%, 1)",
                        color: "#000"
                    })}> <div css={mq({
                        color: "#fff",
                        fontSize: 20,
                        padding: "10px 15px",
                        border: "solid",
                        borderWidth: "0px 0px 1px 0px",
                        borderColor: "#f5f5f5",
                        textTransform: "capitalize",
    fontWeight:300,
                    })}>
                    about
                    </div>
                    <div css={mq({
                        color: "#fff",
                        padding: "10px 15px",
                        border: "solid",
                        borderWidth: "0px 0px 1px 0px",
                        borderColor: "#f5f5f5",
                        fontSize: 20,
                        textTransform: "capitalize",
    fontWeight:300,
                    })}>
                    portfolio
                    </div>
                    <div css={mq({
                        color: "#fff",
                        padding: "10px 15px",
                        textTransform: "capitalize",
    fontWeight:300,
                        
                        fontSize: 20,
                    })}>
                        contact
                    </div></div>
                    </motion.div> }</AnimatePresence>
            

      
      </div>
        </div>
          <div css={mq({
            // background: "linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)",
            
            display: "flex",
            justifyContent: "center",
            textAlign: ["center","left"],
            
            
           
          })}>
          <div css={mq({
              width: ["90%","90%","90%","80%"],
              fontSize: [36,50,50,50],
              fontWeight: [900,900,900,900],
              margin: ["20px 0", "50px 0px 0px 0px","50px 0px 0px 0px","60px 0px 0px 0px"],

          })}>
              <div css={mq({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: ["column", "row"]

              })}>
              <div css={mq({
                 marginRight: [0,25]
              })}>
              <div>
          <div  css={css`
      line-height: 1;
      background: -webkit-linear-gradient(90deg, hsla(344, 97%, 63%, 1) 0%, hsla(232, 90%, 59%, 1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    
     
    `}>Taylor McCaslin Investor, Product Manager, & LGBTQ+ Mentor</div></div>

<div css={mq({
    fontSize:[17,20],
    color: "#fff",
    fontWeight:300,
    marginTop: 20
})}>I’m a multi-disciplinary Investor, Product Manager, and Technologist living in Big Sky, Montana. Since 2011 I’ve worked at large scale, hyper-growth technology companies. In my career I’ve expereinced 2 IPOs and 3 aquisitions.

I specialize in software as a service (SaaS) products and have experience with data science, machine learning, mobile apps, cyber security, web hosting, and web apps.</div>

<button css={mq({
    backgroundColor: "hsla(232, 90%, 59%, 1)",
    color: "#fff",
    padding: "15px 20px",
    borderRadius: 10,
    fontWeight:300,
    fontSize:[13,15],
    marginBottom: 20,
    marginTop: [20, 0],
    outline: "none",
    fontFamily: "Source Sans 3",
    textTransform: "uppercase"
})}>more about me</button></div>
<motion.img css={mq({
    width: ["90vw",500],
    height: ["auto",400],
    borderRadius: [10,20],
    marginTop: [20, 0],
    marginleft: [0,25]
})}

initial={{ opacity:  0  }}
animate={{  opacity:  1  }}
                   
transition={{ duration: 0.5 }}
                    src="team3.jpg"/></div>


</div>
          </div>
         
          </div>
      )
  }

  export default Land