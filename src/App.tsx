import React, { useState, useEffect } from "react";
import "./App.scss";
import Modal from "react-modal";
const App = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [wasConfirmed, setWasConfirmed] = useState(false);
  const [random, setRandom] = useState(0);

  const handleClick = () => {
    setWasConfirmed(false);
    setRandom(0);
    openModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    setWasConfirmed(true);
    setRandom(randomNumber());
  };

  const handleTryAgain = () => {
    setWasConfirmed(false);
    setRandom(0);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      borderRadius: "20px",
      transform: "translate(-50%, -50%)",
      border: 0,
      padding: 0,
      maxWidth: "1000px",
      width: "100%",
    },
  };

  const randomNumber = () => {
    return Math.round(Math.random());
  };

  useEffect(() => {
    Modal.setAppElement("body");
  });

  return (
    <div>
      <button className="button" onClick={handleClick}>
        Potvrdit požavavek
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        {wasConfirmed && random === 1 && (
          <div className="box">
            <div className="stripe"></div>
            <div className="modal">
              <img className="image" alt="done" src={"ok-128.png"} />
              <div className="text">Požadavek byl potvrzen.</div>
            </div>
          </div>
        )}
        {!wasConfirmed && (
          <div className="box">
            <div className="stripe-blue"></div>
            <div className="modal-blue">
              <img className="image" alt="done" src={"timer-128.png"} />
              <div>
                <div className="text-blue">Potvrzení požadavku.</div>
                <div className="container">
                  <div className="link" onClick={handleConfirm}>
                    Odeslat SMS
                  </div>
                  <p className="smallerText">s potvrzovacím kódem.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {wasConfirmed && random === 0 && (
          <div className="box">
            <div className="stripe-red"></div>
            <div className="modal-red">
              <img className="image" alt="cancel" src={"cancel-128.png"} />
              <div>
                <div className="text-red">Požadavek nebyl potvrzen.</div>
                <div className="container">
                  <div onClick={handleTryAgain} className="link">
                    Zkusit znovu
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;
