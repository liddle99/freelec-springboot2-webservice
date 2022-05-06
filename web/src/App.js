import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoardCreate from "./container/board/boardCreate";
import BoardUpdateContainer from "./container/board/boardUpdateContainer";
import Main from "./container/Main";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/insert' element={<BoardCreate />} />
        <Route path='/update/:id' element={<BoardUpdateContainer />} />
      </Routes>
    </Router>
  );
};

export default App;