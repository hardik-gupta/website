import React, { useState } from "react";
import styles from "./sidebar.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import user from "../../assets/images/user.jpg";
export const Sidebar = () => {
  const [state, setState] = useState({
    name: "Abhishek Kumar",
    userName: "geeky-abhishek",
    about: "Hungry for tech",
  });
  return (
    <div className={styles.sidebar}>
      <>
        <Row>
          <Col>
            <Image src={user} alt="user" className={styles.avatar} />
          </Col>
        </Row>
        <Row className="">
          <Col>
            <h4>{state.name}</h4>
            <h6 className={styles.textGray}>{state.userName}</h6>
            <h6>{state.about}</h6>
          </Col>
        </Row>
      </>
    </div>
  );
};
