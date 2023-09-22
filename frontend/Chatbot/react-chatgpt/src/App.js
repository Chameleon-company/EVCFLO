import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

  const createNewChat = () => {
    setMessage(null);
    setValue("");
    setCurrentTitle(null);
  };

  const handleClick = (uniqueTitles) => {
    setCurrentTitle(uniqueTitles);
    setMessage(null);
    setValue("");
  };

  // const deleteChatHistory = (titleToDelete) => {
  //   setPreviousChats((previousChats) =>
  //     previousChats.filter((chat) => chat.title !== titleToDelete)
  //   );
  // };

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        setMessage(data.choices[0].message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(currentTitle, value, message);
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }
    if (currentTitle && value && message) {
      setPreviousChats((previousChats) => [
        ...previousChats,
        {
          title: currentTitle,
          role: "user",
          content: value,
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
        },
      ]);
    }
  }, [message, currentTitle]);

  console.log(previousChats);

  const currentChat = previousChats.filter(
    (previousChats) => previousChats.title === currentTitle
  );
  const uniqueTitles = Array.from(
    new Set(previousChats.map((previousChats) => previousChats.title))
  );
  console.log(uniqueTitles);

  return (
    <div className="app">
      <section className="side-bar">
        <button onClick={createNewChat}>Add New Chat</button>
        <ul className="history">
          {uniqueTitles?.map((uniqueTitles, index) => (
            <li key={index}>
              {" "}
              <span onClick={() => handleClick(uniqueTitles)}>
                {uniqueTitles}
              </span>
              {/* <button onClick={() => deleteChatHistory(uniqueTitles)}>
                Delete
              </button> */}
            </li>
          ))}
        </ul>
        <nav>
          <p>EVCFLO</p>
        </nav>
      </section>
      <section className="main">
        <h1>EVCFLO Chatbot</h1>
        <ul className="feed">
          {currentChat?.map((chatMessage, index) => (
            <li key={index}>
              <p className="role">{chatMessage.role}</p>
              <p>{chatMessage.content}</p>
            </li>
          ))}
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <div id="submit" onClick={getMessages}>
              ➢
            </div>
          </div>
          <p className="info">EVCFLO Chatbot</p>
        </div>
      </section>
    </div>
  );
};

export default App;
