import React, { useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

import { useContext } from 'react'
const Main = () => {

const{onSent,recentprompt,showresult,loading,resultdata,setinput,input}=useContext(Context)

  return (
      <>
          <div className="main">
              <div className="nav">
                  <p>Gemini</p>
                  <img src={assets.user_icon} alt="" className="src" />
              </div>
              <div className="main-container">
                  
                  {!showresult ? <>
                      <div className="greet">
                          <p><span>Hello,...</span></p>
                          <p>How can we help you today?</p>
                      </div>
                      <div className="cards">
                          <div className="card">
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facilis?</p>
                              <img src={assets.compass_icon} alt="" className="src" />
                          </div>
                          <div className="card">
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, exercitationem?</p>
                              <img src={assets.bulb_icon} alt="" className="src" />
                          </div>
                          <div className="card">
                              <p>Lorem ipsum dolor sit amet.</p>
                              <img src={assets.message_icon} alt="" className="src" />
                          </div>
                          <div className="card">
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati quidem excepturi unde eius vel!</p>
                              <img src={assets.bulb_icon} alt="" className="src" />
                          </div>
                      </div>
                  </>
                      :
                      <div className="result">
                          <div className="result-text">
                              <p>{recentprompt}</p>
                          </div>
                          <div className="result-data">
                              <img src={assets.gemini_icon} alt="" className="src" />
                              {loading
                                  ? <div className="loader">
                                      <hr />
                                      <hr />
                                      <hr />
                                  </div>
                            
                                  : <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>}
                          </div>
                      </div>
                  
                }
                   
                  <div className="main-footer">
                      <div className="search">
                          <input type="text" placeholder="Search" onChange={(e) =>setinput(e.target.value)}  value={input}/>
                          <div>
                              <img src={assets.gallery_icon} alt="" />
                              <img src={assets.mic_icon} alt="" />
                              <img src={assets.send_icon} alt="" onClick={()=>onSent()}/>
                          </div>
                          
                      </div>
                      <p className="footer-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, vero?</p>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Main
