import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    
    return <div style={{ height: '100vh' }}>
        <PrettyChatWindow
            projectId='e65761da-d6af-45c3-84db-e81c11d038b2'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
        ></PrettyChatWindow>
    </div>
}

export default ChatsPage;
