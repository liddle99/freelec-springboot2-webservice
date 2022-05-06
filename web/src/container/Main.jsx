import React, { useEffect, useState } from "react";
import axios from "axios";
import MainComponent from "../component/main/MainComponent";
import { Link } from "react-router-dom";

const Main = () => {
  const [board, setBoard] = useState([
    {
      id: 0,
      title: "",
      author: "",
      modifiedDate: "",
    },
  ]);
  useEffect(() => {
    axios.get("http://localhost:8080/main").then((res) => {
      setBoard(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <MainComponent data={board} />
      <Link to={"/insert"}>글 쓰기</Link>
    </div>
  );
};

export default Main;
