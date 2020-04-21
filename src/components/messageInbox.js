import React from 'react'
import '../../src/messageInbox.css'
import MessageInboxSection1 from './messageInboxSection/messageInboxSection1'
import MessageInboxSection2 from './messageInboxSection/messageInboxsection2'

class MessageInbox extends React.Component{
    render(){
        return(
            <div>
                {/* <Header1 /> */}
                {/* <NavHeader /> */}
  
                <MessageInboxSection1 />
                <MessageInboxSection2 />
                {/* <Footer /> */}

            </div>
        )
    }
}

export default MessageInbox;