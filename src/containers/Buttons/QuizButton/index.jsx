import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import ActionButton from "../../../components/ActionButton";
import { handleLoadQuizzes } from "../../../store/quiz/service";

const QuizButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    await dispatch(handleLoadQuizzes());
    navigate("/quiz");
  };

  return (
    <ActionButton onClick={handleClick}>
      <span>📝</span> AI Quiz
    </ActionButton>
  );
};

export default QuizButton;
