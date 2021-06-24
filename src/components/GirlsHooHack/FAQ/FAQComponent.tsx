import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Collapse } from 'react-collapse';
import { FaFontAwesome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import {Row, Col} from 'react-bootstrap';

interface Props {
  question: string;
  answer: string;
}

function FAQComponent(props: Props) {

  const [open, setOpen] = useState(false);
  const [hovColor, setHovColor] = useState(false);

  return (
    <div className={isMobile ? "mt-2" : "mt-4"}>
      <Row>
        <Col md={11} xs={10}>
          {isMobile ? <h3 className="mono font-weight-bold hack">{props.question}</h3> : <p className="mono font-weight-bold hack">{props.question}</p>}
        </Col>
        <Col md={1} xs={2}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaMinus color={`${hovColor&& !isMobile ? "#FA7815" : "#0D38D3"}`} onMouseOver={() => setHovColor(true)} onMouseOut={() => setHovColor(false)} /> : <FaPlus color={`${hovColor&&!isMobile ? "#FA7815" : "#0D38D3"}`} onMouseOver={() => setHovColor(true)} onMouseOut={() => setHovColor(false)} />}
        </Col>
      </Row>
      <Collapse isOpened={open}>
        <p className="hack">{props.answer}</p>
      </Collapse>
    </div>
  );
}

export default FAQComponent;
