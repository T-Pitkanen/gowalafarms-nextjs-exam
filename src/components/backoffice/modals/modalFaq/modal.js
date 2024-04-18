import Modal from "react-modal";

import styles from "./modal.module.css";

const ModalFaq = ({
  modalIsOpen,
  closeModal,
  id,
  question,
  answer,
  handleUpdate,
  setQuestion,
  setAnswer,
}) => {
  return (
    <Modal className={styles.modal} isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
      <div className={styles.modalHeader}>
        {" "}
        <h3>Edit F.A.Qs</h3>
        <button onClick={closeModal}>Close</button>
      </div>

      <form className={styles.form} onSubmit={handleUpdate}>
        <label>
          ID:
          <input type="text" name="id" value={id} readOnly />
        </label>

        <label>
          Question?
          <input
            type="text"
            name="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>

        <label>
          Answer
          <textarea
            name="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={"10"}
            cols={"50"}
          />
        </label>

        <button>Update</button>
      </form>
    </Modal>
  );
};

export default ModalFaq;
