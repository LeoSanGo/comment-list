import './App.css';
import React, { useState } from 'react';

function App() {
  const [comment, setComments] = useState();
  const [allComments, setAllComments] = useState([]);

  const handleTextArea = (event) => {
    setComments(event.target.value);
  };

  const makeComment = () => {
    const receiveAllComments = [...allComments, comment];
    setAllComments(receiveAllComments);
  };
  return (
    <div>
      <h1>TESTE</h1>
      <textarea onChange={handleTextArea} />
      <button onClick={makeComment}>Comentar</button>

      <ul>
        {allComments.map((oneComment, index) => (
          <li key={index}>{oneComment}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
