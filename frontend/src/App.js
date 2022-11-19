import "./App.css";
import {StreamChat} from "stream-chat";
import {Chat} from "stream-chat-react";
import Cookie from "universal-cookie";
import ChannelListContainer from "./Components/ChannelListContainer.jsx";
import ChannelContainer from "./Components/ChannelContainer.jsx";

const apiKey = "3hcqh746p2wj";
const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
