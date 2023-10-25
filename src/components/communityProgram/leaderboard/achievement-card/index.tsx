import React, { FC, useCallback, useMemo, useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import styles from "./card.module.css";
import badge from "@/component/assets/images/badge.png"
import Image from "next/image";
import { BadgeModal } from "../badge-modal";

const AchievementCard: FC<{ badgeDetails: any }> = ({ badgeDetails }) => {
  const [show, setShow] = useState(false);
  const onBadgeClick = useCallback(() => setShow(true), []);
  const onClose = useCallback((newData: any) => {
    setShow(false);
    console.log({ newData });
  }, []);

  console.log({ show, badgeDetails });
  return (
    <Col xs={4} className="mb-2" onClick={onBadgeClick}>
      <Card className={`${styles.achievementCard} text-center`}>
        <Image src={badge} alt="badge" className={styles.cardImage} />
        <Card.Body>
          <Card.Text className="text-center">Badge Name</Card.Text>
        </Card.Body>
      </Card>
      {show && (
        <BadgeModal
          show={show}
          handleClose={onClose}
          badgeDetails={badgeDetails}
        />
      )}
    </Col>
  );
};

export default AchievementCard;
