import Sidebar from '../../Components/Sidebar/Sidebar'
import ChatPanel from '../../Components/ChatPanel/ChatPanel'

export default function HomeScreen() {
    return (
        <div className='app-layout'>
            <Sidebar />
            <ChatPanel contact={null} />
        </div>
    )
}
