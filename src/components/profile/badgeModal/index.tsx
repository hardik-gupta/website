import Image from "next/image";
import React, { FC, useCallback, useState } from "react";
import { Button, Card, Col, Dropdown, Modal, Row } from "react-bootstrap";
import {createPortal} from 'react-dom'
// import badge from "src/assets/images/badge.png";
import badge from "../../../assets/images/badge.png"
import share from "../../../assets/images/share.svg"
import style from "./badge.module.css"
type BadgeModalProps = {
  show: boolean;
  handleClose: (arg: any) => void;
  badgeDetails: any;
};

export const BadgeModal: FC<BadgeModalProps> = ({
  show,
  handleClose,
  badgeDetails,
}) => {
  const [open, setOpen] = useState(show);

  const onClose = useCallback(() => {
    setOpen(false);
    handleClose(false);
  }, [handleClose]);

  const onCopyShareLink =useCallback(()=>{
    navigator.clipboard.writeText(`url`);
  },[]);

  const onOpenTwitterPreview=useCallback(()=>{
   window.open(`https://twitter.com/intent/tweet?text=`,'_blank')
  },[])
  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header style={{ backgroundColor: "#B3E287" }}>
        <Image
          src={badge}
          alt="badge"
          className="mx-auto mt-1"
          style={{ width: "110px", height: "110px" }}
        />
      </Modal.Header>
      <Modal.Body className="bg-dark p-0">
        <Card className="p-0 bg-dark text-center">
          <Card.Body className="text-white text-left">
            <Row>
              <Col xs={10}>
                <Card.Title>Badge name</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Col>
              <Col>
                
                <Dropdown>
                  <Dropdown.Toggle size="sm"  className={style.toggle}>
                  <Image src={share} alt="share"/>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-2" onClick={onCopyShareLink}>
                      Copy Share Link
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={onOpenTwitterPreview}>
                      Preview On Twitter
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};


function SharePortal() {
  //to create a portal, use the createPortal function:
  return createPortal(
    <div className="modal">
      <p>This is part of the modal</p>
    </div>,
    document.body
  );
}