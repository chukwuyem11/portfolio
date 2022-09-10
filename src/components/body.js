import React, { useState,useRef } from "react";

/** @jsxImportSource @emotion/react */
import { css, cx } from "@emotion/react";
import facepaint from "facepaint";
import Image from 'next/image' 
import { HiOutlineSearch, HiBeaker, HiOutlineCode,  } from 'react-icons/hi';
import { FaRetweet, FaTwitter,FaFacebookF,FaLinkedinIn } from 'react-icons/fa';
import { motion, AnimatePresence, AnimateSharedLayout, useInView } from "framer-motion";

  const Body = () => {
       const breakpoints = [576, 768, 992, 1200];
  const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
  
  const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
  const [tab, setTab] = useState("all")
  

  const portfolio = [
      {
          id: 0,
          image: "past1.webp",
          name: "WP Engine Features",
          category : "Industry"
      },
      {
        id: 1,
        image: "past2.webp",
        name: "Indeed Apply WordPress Plugin",
        category : "Mobile"
    },
    {
        id: 2,
        image: "past3.webp",
        name: "WP Engine Install Filtering",
        category : "Web"
    },
    {
        id: 3,
        image: "past4.jpg",
        name: "Social Job Searching",
        category : "Web"
    },
    {
        id: 4,
        image: "past5.jpg",
        name: "New Works Festival Website",
        category : "Mobile"
    },
    {
        id: 5,
        image: "past6.jpg",
        name: "Bazaarvoice Style Guide",
        category : "Web"
    },
    {
        id: 6,
        image: "past7.jpg",
        name: "Workshop for Information Technology in the Arts",
        category : "Talks"
    },
    {
        id: 7,
        image: "past6.jpg",
        name: "2013 NWF Mobile App",
        category : "Mobile"
    },
    {
        id: 8,
        image: "past7.jpg",
        name: "Landmark Consolidated",
        category : "Web"
    },
    {
        id: 9,
        image: "past8.webp",
        name: "The Slow Web",
        category : "Talks"
    },
    {
        id: 10,
        image: "past9.webp",
        name: "TXMTW Website",
        category : "Web"
    },
    {
        id: 11,
        image: "past10.jpg",
        name: "Festival Maps",
        category : "Print"
    },
    {
        id: 12,
        image: "past11.jpg",
        name: "septemberplay Mosaic",
        category : "Print"
    },
    {
        id: 13,
        image: "past12.webp",
        name: "Shellie O’Neal Website",
        category : "Web"
    },
    {
        id: 14,
        image: "past13.jpg",
        name: "Q Inc. Business Plan",
        category : "Print"
    },
    {
        id: 15,
        image: "past14.webp",
        name: "Q Inc. Logo",
        category : "Logo"
    },
    {
        id: 16,
        image: "past15.webp",
        name: "septemberplay Animation",
        category : "Web"
    },
    {
        id: 17,
        image: "past16.jpg",
        name: "Shellie O’Neal Logo",
        category : "Print"
    },
    {
        id: 18,
        image: "past17.jpg",
        name: "Hoops & Courts of Texas Logo",
        category : "Logo"
    },
    {
        id: 19,
        image: "past18.jpg",
        name: "Q Inc. Annual Report",
        category : "Print"
    },
    

  ]
  
  const categories = [
      {
          id: 0,
          name: "all"
      },
      {
        id: 1,
        name: "Industry"
    },
    {
        id: 2,
        name: "Logo"
    },
    {
        id: 3,
        name: "Mobile"
    },
    {
        id: 4,
        name: "Print"
    },
    {
        id: 5,
        name: "Talks"
    },
    {
        id: 6,
        name: "Web"
    },
    
  ]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  const pick_category = (cat) => {
      setTab(cat)
      
  }
      return(
          <div>
              <div css={mq({
                  
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "center",
                   marginTop: 50
              })}>
                  <div css={mq({
                       width: ["90%","90%","90%","80%"],
                  })}>
                    <div  css={mq({
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: ["column-reverse", "row"]
                    })}> <motion.img ref={ref} css={mq({
                        opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                        width: "auto",
                        height: [300,400],
                    marginTop: [30,0],
                        borderRadius: "100%",
                    })}  
                    
                    src="ceo.jpg"/> <div css={mq({
                        marginLeft: [0,50]
                    })}>
          <div css={mq({
            fontSize: [36,50,50,50],
            fontWeight: [900,900,900,900],
            lineHeight: 1,
            textAlign: ["left","left"],
            color: "hsla(232, 90%, 59%, 1)"
          })}>
          
          WHO I AM
          
          </div>
          <div css={mq({
              fontSize:[17,18],
              textAlign: ["left","left"],
              fontWeight:300,
              marginTop: 20
          })}>
              I’m a Principal Product Manager at GitLab focused on Security. We help the world develop more secure software. Security capabilities, integrated into your development lifecycle.
GitLab is an open core company which develops software for the software development lifecycle used by more than 100,000 organizations and has an active community of more than 2200 contributors. GitLab believes in a world where everyone can contribute.</div>
<div css={mq({
    fontSize:[17,18],
    textAlign: ["left","left"],
    fontWeight:300,
    marginTop: 20
})}>
Previously, I was a Senior Product Manager at Yonder / New Knowledge, an information integrity company using data science to detect fake news, disinformation, and inauthentic behavior online. Prior to that I was a Senior Product Manager at Duo Security focused on duo’s mobile app helping protects organizations against data breaches with multifactor authentication. Before that I was a Product Manager at WP Engine, WP Engine is the leading digital experiences platform on WordPress. Over 5% of the web visits a site on WP Engine’s platform every day. Prior, I was an Interaction Designer at Indeed.com, the world’s #1 job search engine, where I helped 180 million job seekers find jobs every month.</div></div></div>
          </div></div>
          
          
          <div css={mq({
              backgroundColor: '#f5f5f5',
              marginTop: 50
          })}>
          <div css={mq({
                  
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "center",
                   marginTop: 50
              })}>
        <div css={mq({
                      width: ["90%","90%","90%","80%"],
                  })}>
          <div css={mq({
            fontSize: [36,50,50,50],
            fontWeight: [900,900,900,900],
            lineHeight: 1,
            textAlign: "left",
            marginTop: 50
            
          })}>
          
          HOW I WORK
          
          </div>
          <div css={mq({
        display: "grid",
        gridTemplateColumns: ["repeat(1 , 1fr)","repeat(2 , 1fr)","repeat(2 , 1fr)","repeat(2 , 1fr)"],
        justifyContent: "space-between",
        rowGap: 30,
        columnGap: 10,
        width: "100%",
height: "auto",
        marginBottom: 50,
        marginTop: 20
      })}>
      
      
      <div css={mq({
             
          })}>
          <HiOutlineSearch size={80} color={"hsla(232, 90%, 59%, 1)"}  />
          <div>
          <div css={mq({
    fontSize:[18,20],
   
    fontWeight:600,
    
})}>RESEARCH
</div>
          <div css={mq({
     fontSize:[16,18],
   
     fontWeight:300,
     marginTop: 10
})}>Understand the problem, empathize with the person. Explore the competitive landscape. Identify strategic opportunities. Define design goals and requirements.</div>
          </div>
          </div>
          <div>
          <HiBeaker size={80} color={"hsla(232, 90%, 59%, 1)"}/>
           <div>
          <div css={mq({
    fontSize:[18,20],
   
    fontWeight:600,
    
})}>DESIGN</div>
          <div css={mq({
     fontSize:[16,18],
   
     fontWeight:300,
     marginTop: 10
})}>Understand the problem, empathize with the person. Explore the competitive landscape. Identify strategic opportunities. Define design goals and requirements.</div>
          </div>
          </div>
          <div>
          <HiOutlineCode size={80} color={"hsla(232, 90%, 59%, 1)"}/>
           <div>
          <div css={mq({
    fontSize:[18,20],
   
    fontWeight:600,
    
})}>BUILD</div>
          <div css={mq({
     fontSize:[16,18],
   
     fontWeight:300,
     marginTop: 10
})}>Understand the problem, empathize with the person. Explore the competitive landscape. Identify strategic opportunities. Define design goals and requirements.</div>
          </div>
          </div>
          <div>
          <FaRetweet size={80} color={"hsla(232, 90%, 59%, 1)"}/>
           <div>
          <div css={mq({
    fontSize:[18,20],
   
    fontWeight:600,
    
})}>REFINE</div>
          <div css={mq({
    fontSize:[16,18],
   
    fontWeight:300,
    marginTop: 10
})}>Understand the problem, empathize with the person. Explore the competitive landscape. Identify strategic opportunities. Define design goals and requirements.</div>
          </div>
          </div></div>
          
          </div>
          </div>
          </div>
          <div css={mq({
                  
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 50
             })}>
       <div css={mq({
                       width: ["90%","90%","90%","80%"],
                 })}>
                     <div css={mq({
            fontSize: [36,50,50,50],
            fontWeight: [900,900,900,900],
            lineHeight: 1,
            textAlign: "left",
          
            
          })}>
          
          PORTFOLIO
          
          </div>
          <div css={mq({
              display: "flex",
              justifyContent: ["space-evenly","space-between"],
              marginTop:20,
              marginBottom:20,
              flexWrap: "wrap"
          })}>
              {categories.map((cat) => (<div css={mq({
                  margin: '0px 5px'
              })} key={cat.id} onClick={() => pick_category(cat.name)}><div css={mq({
    fontSize:[18,20],
   
    fontWeight:600,
    color: tab == `${cat.name}` ? "hsla(232, 90%, 59%, 1)4" : "#c4c4c4",
    cursor: "pointer",
    textTransform: "uppercase"
    
})}>{cat.name}</div> {tab === `${cat.name}` && (
                <motion.div css={mq({
                display: "flex",
                justifyContent: "center"
              })} layoutId="dot">
                <div css={mq({
                  
                  width: 20,
                  height: 5,
                  marginTop: 2,
                  borderRadius: 5,
                  backgroundColor: "hsla(232, 90%, 59%, 1)"
                })}></div>
              </motion.div>
              )}</div>))}
          </div>
          <div>
            {tab == "all"? <div> <motion.div layout css={mq({
        display: "grid",
        gridTemplateColumns: ["repeat(2 , 1fr)","repeat(2 , 1fr)","repeat(2 , 1fr)","repeat(3 , 1fr)"],
        justifyContent: "space-between",
        rowGap: 30,
        columnGap: 30,
        width: "100%",
height: "auto",
        marginBottom: 50,
        marginTop: 20
      })}>{portfolio.map((portfolio) => (<motion.div layout key={portfolio.id}>
          <motion.img src={portfolio.image} 
           initial={{ opacity: 0, }}
           animate={{  opacity: 1,  }}
           // exit={{opacity: 0,  }}
           
           transition={{ delay: `0.${portfolio.id}`, duration: 0.5 }}
          css={mq({
    
    borderRadius: 15,
    objectFit: "cover",
    objectPosition: "top center",
    width: "100%",
        height: [150, 300, 300, 300]
      })}/>
          <div css={mq({
              
    fontSize:[13,20],
   
    fontWeight:600,
    
    cursor: "pointer",
    marginTop: 10
    
    
})}>{portfolio.name}</div><div css={mq({
    fontSize:[13,15],
   
    fontWeight:600,
    color: "#c4c4c4",
    cursor: "pointer",
    textTransform: "uppercase"
    
})}>{portfolio.category}</div></motion.div>))}</motion.div></div> : <motion.div layout>
                  <div css={mq({
        display: "grid",
        gridTemplateColumns: ["repeat(2 , 1fr)","repeat(2 , 1fr)","repeat(2 , 1fr)","repeat(3 , 1fr)"],
        justifyContent: "space-between",
        rowGap: 30,
        columnGap: 10,
        width: "100%",
height: "auto",
        marginBottom: 50,
        marginTop: 20
      })}>{portfolio.filter(portfolio => portfolio.category == tab).map((portfolio) => (<motion.div layout key={portfolio.id}>
          <motion.img src={portfolio.image} 
          initial={{ opacity: 0, }}
          animate={{  opacity: 1,  }}
          // exit={{opacity: 0,  }}
          transition={{ delay: `0.${portfolio.id}`, duration: 0.5 }}
          css={mq({
    
    borderRadius: 15,
    objectFit: "cover",
    objectPosition: "top center",
    width: "100%",
        height: [150, 300, 300, 250]
      })}/>
         <div css={mq({
              
    fontSize:[18,20],
   
    fontWeight:600,
    
    cursor: "pointer",
    marginTop: 10
    
    
})}>{portfolio.name}</div><div css={mq({
    fontSize:[13,15],
   
    fontWeight:600,
    color: "#c4c4c4",
    cursor: "pointer",
    textTransform: "uppercase"
    
})}>{portfolio.category}</div></motion.div>))}
                  </div></motion.div>}
          </div>
          </div></div>
          <div css={mq({
                  
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 50,
                  backgroundColor: "#000"
             })}>
                 <div css={mq({
                       width: ["90%","90%","90%","80%"],
                      marginTop: 50,
                      marginBottom: 20
                 })}>
              <div>
              <div css={mq({
            fontSize: [36,50,50,50],
            fontWeight: [900,900,900,900],
            lineHeight: 1,
            textAlign: ["left", "center"],
          color: "#fff"
            
          })}>
          
          CONTACT US
          
          </div>
          <div css={mq({
                  
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
             })}>
<form css={mq({
    marginTop:20
})}>
<input css={mq({
    backgroundColor: "transparent",
    borderColor: "#fff",
    borderWidth: 1,
    outline: "none",
    height: 50,
    width: ["100%",300],
    padding: 10,
    margin: ["5px 0px","5px 0px"],
    borderRadius: 10,
    color: "#c4c4c4",
    fontSize:18,
   fontFamily: 'Source Sans 3',
     fontWeight:300,
})} type="text" name="name"  placeholder="Name" required />
<input css={mq({
    backgroundColor: "transparent",
    borderColor: "#fff",
    borderWidth: 1,
    outline: "none",
    height: 50,
    width: ["100%",300],
    padding: 10,
    margin: ["5px 0px","5px 5px"],
    borderRadius: 10,
    color: "#c4c4c4", fontSize:18,
    fontFamily: 'Source Sans 3',
      fontWeight:300,
})} type="text" name="email"  placeholder="Email Address" required />
<div>
<textarea css={mq({
    backgroundColor: "transparent",
    borderColor: "#fff",
    borderWidth: 1,
    outline: "none",
    
    width: ["100%",610],
    padding: 10,
    margin: ["5px 0px","5px 0px"],
    borderRadius: 10,
    color: "#c4c4c4", fontSize:18,
    fontFamily: 'Source Sans 3',
      fontWeight:300,
})} rows="10" placeholder="Message" name="message" required></textarea>
</div>

</form> </div>
<div css={mq({
                  
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
             })}>

<button css={mq({
    backgroundColor: "hsla(232, 90%, 59%, 1)",
    color: "#fff",
    padding: "15px 20px",
    borderRadius: 10,
    outline: "none",
    fontWeight:300,
    marginTop: 10,
    fontSize:[13,15],
    fontFamily: "Source Sans 3",
    textTransform: "uppercase"
})}>send your message</button></div>
              
              
              
              </div>
              
              
             </div>
             
          </div>
          <div css={mq({
              borderTop:  "1px solid #3d3d3d",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                  backgroundColor: "#000"
             })}>
                 <div css={mq({
                       width: ["90%","90%","90%","80%"],
                     margin: "20px 0px"
                 })}>
          <footer>
                  <div css={mq({
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: ["column","row"],
                      alignItems: "center",
                      
                  })}>
                  <div css={mq({
                      color: "#fff",
                      fontWeight:300,
                  })}>© 2010 - 2021 Taylor McCaslin</div>
                  <div css={mq({
                      display: "flex",
                      alignItems: "center",
                     marginTop: [10, 0]

                  })}>
                   <div><FaTwitter size={20} color={"#fff"}/></div>
                  <div css={mq({marginLeft: 10 })}><FaFacebookF  size={20} color={"#fff"}/></div>
                  <div css={mq({marginLeft: 10 })}><FaLinkedinIn size={20} color={"#fff"}/></div>
                  </div>
                  </div>
              </footer></div></div>
          </div>
      )
  }

  export default Body