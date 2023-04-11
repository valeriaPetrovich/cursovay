import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import styles from "./styles.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import goodBoking from "../../assets/Group 30.svg";
import useGoback from "../../hoock/useGoBack";
import img from "../../assets/unsplash_godkmdG6M6o.jpg";
import vector from "../../assets/Vector 14.svg";
import { NavLink } from "react-bootstrap";
import { useDispatch} from 'react-redux';

const Booking = () => {
  const [nameRecipe, setNameRecipe] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [show, setShow] = useState(false);
  const { goBack } = useGoback();
  const handleClose = () => setShow(false);

  const commentsValue = {
    recipe_name: nameRecipe,
    email: email,
    comment: comments,
  };

  const dispatch = useDispatch();
  const fetcheComment = () => {
  };
  const getItems = () => {
    // localStorage.setItem(
    //   `Коментарий от ${commentsValue.email} к рецепту ${commentsValue.recipe_name}`,
    //   commentsValue.comment
    // );
    // localStorage.setItem(
    //   commentsValue.recipe_name,
    //   commentsValue.comment
    // );
    localStorage.setItem(
      commentsValue.recipe_name,
      JSON.stringify(commentsValue)
    );
    setShow(true);
    fetcheComment();
  };





  return (
    <div className={styles.content}>
      <div>
        <button onClick={goBack} className={styles.buttonGoBack}>
          <img src={vector} alt="" className={styles.vector} />
          <img src={vector} alt="" className={styles.vector} />
        </button>
        <img src={img} alt="" className={styles.img} />
      </div>
      <div className={styles.bookingContainer}>
        <NavLink to="/" className={styles.title}>
          AYMLMENU
        </NavLink>
        <div className={styles.formContent}>
          <div className={styles.form}>
            <p className={styles.description}>
              Укажите пожалуйста название рецепта, коментарий к которому вы
              хотите оставить, и ваш адрес электронной, чтобы мы могли связаться
              с вами.
            </p>
            <div className={styles.name}>
              <Form.Group>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="Название рецепта"
                  className={styles.inputBooking}
                  onChange={(e) => setNameRecipe(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="Электронная почта"
                  className={styles.inputBooking}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </div>
            <Form.Group>
              <textarea
                formcontrolname="myText"
                adaptiveinputdirective=""
                placeholder="Оставте свой комментарий"
                className={styles.inputComment}
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
            </Form.Group>
          </div>
          <button className={styles.buttonBoking} onClick={getItems}>
            Отправить отзыв
          </button>
        </div>
      </div>

      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={show} onHide={handleClose}>
          <div className={styles.book}>
            <img src={goodBoking} alt="" className={styles.goodBoking} />
            <div>
              <p className={styles.titleModal}>
                Ваш комментарий был успешно отправлен!
              </p>
              <p className={styles.textModal}>
                Спасибо за Ваш отзыв и за то, что помогаете нам стать лучше!
              </p>
            </div>
            <Button
              variant="secondary"
              onClick={goBack}
              className={styles.buttonModal}
            >
              На главную
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Booking;
