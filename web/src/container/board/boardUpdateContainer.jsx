import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BoardUpdateContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/posts/${id}`)
      .then((res) => {
        setBoard(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoard({ ...board, [name]: value });
    console.log(board);
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:8080/api/v1/posts/${id}`, board)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/v1/posts/${id}`)
      .then((res) => {
        console.log(res);
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <label>번호</label>
      <input type="text" value={id} readOnly />
      <label>제목</label>
      <input
        type="text"
        name="title"
        value={board.title}
        onChange={handleChange}
      />
      <label>작성자</label>
      <input type="text" name="author" value={board.author} readOnly />
      <label>내용</label>
      <input
        type="text"
        name="content"
        value={board.content}
        onChange={handleChange}
      />
      <button onClick={handleUpdate}>수정</button>
      <button onClick={handleDelete}>삭제</button>
    </>
  );
};
export default BoardUpdateContainer;
