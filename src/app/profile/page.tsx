"use client";
import { Sidebar } from "@/component/components";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./profile.module.css";
import AchievementCard from "@/component/components/communityProgram/leaderboard/achievement-card";

const Profile = () => {
  const users = Array.from(Array(10).keys());
  return (
    <div className={styles.profileContainer}>
      <Row>
        <Col xs={3}>
          <Sidebar />
        </Col>
        <Col>
          <Row>
            {users.map((user, index) => {
              return <AchievementCard badgeDetails={user} key={user} />;
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
