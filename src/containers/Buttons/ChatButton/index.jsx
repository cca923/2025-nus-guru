import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

import ActionButton from "../../../components/ActionButton";
import { Icon } from "../../../styles/common";
import { handleStartChat } from "../../../store/chat/service";

const ChatButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    // No need to await, chat page has loading ui
    dispatch(handleStartChat());
    navigate("/chat");
  };

  return (
    <ActionButton onClick={handleClick}>
      <Icon fontSize="20px" mr="5px">
        <IoChatboxEllipsesOutline />
      </Icon>
      AI Chat
    </ActionButton>
  );
};

export default ChatButton;
