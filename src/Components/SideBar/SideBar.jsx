import React, { useContext, useState } from 'react'
import './SideBar.css'
import { Context } from '../../context/Context'
import {assets} from '..//../assets/assets'
const SideBar = () => {


    const [extend, setextend] = useState(false);
    const {onSent,prevprompt,setrecentprompt,newchat}=useContext(Context)

    const loadprompt = async (prompt) => {
        setrecentprompt(prompt)
        await onSent(prompt)

    }
  return (
    <div className='sidebar'>
          <div className="header">
 <img src={assets.menu_icon} alt="" className="menu" onClick={() => setextend(prev => !prev)} />

<div 
  className="chat" 
  onClick={() => {
    newchat(); 
    setextend(prev => !prev);
  }}
>
 

                  <img src={assets.plus_icon} alt="" className="src" />
                  {extend ? <p>New Chat</p>:null}
              </div>
              {extend ?
                  <div className="recent">
                      <p className="recent-title">Recent</p>
                      {prevprompt.map((item, index) => {
                          return (
                               <div className="recent-entry" onClick={()=>loadprompt(item)}>
                          <img src={assets.message_icon} alt="" className="src" />
                                  <p> {item.slice(0,18)} ...</p>
                      </div>
                          )
                      })}
                      
                  </div>
                  : null}
          </div>

          <div className="footer">
              <div className="bottom-item recent-entry">
                  <img src={assets.question_icon} alt="" className="src" />
                  {extend ? <p>Help</p> : null}
              </div>
              
              <div className="bottom-item recent-entry">
                  <img src={assets.history_icon} alt="" className="src" />
                  {extend ? <p>Activity</p> : null}
              </div>
               <div className="bottom-item recent-entry">
                  <img src={assets.setting_icon} alt="" className="src" />
                  {extend ? <p>Setting</p> : null}
              </div>
          </div>
    </div>
  )
}

export default SideBar
