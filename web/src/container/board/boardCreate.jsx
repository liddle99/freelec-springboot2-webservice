import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import BoardCreateComponent from "../../component/board/boardCreateComponent";

const BoardCreate = () => {
  const [board, setBoard] = useState({
    title: "",
    content: "",
    author: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoard({ ...board, [name]: value });
    console.log(board);
  };
  const handleInsert = () => {
    axios
      .post("http://localhost:8080/api/v1/posts", board)
      .then((res) => {
        alert("글이 등록되었습니다.");
        navigate('/')
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <BoardCreateComponent
        handleChange={handleChange}
        handleInsert={handleInsert}
      />
      <button>취소</button>
      <button onClick={handleInsert}>등록</button>
    </div>
  );
};
export default BoardCreate;
