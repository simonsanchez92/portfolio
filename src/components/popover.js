import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const MyPopover = () => (
  <OverlayTrigger
    rootClose={true}
    placement="right"
    trigger="click"
    overlay={
      <Popover>
        <Popover.Title
          as="h3"
          style={{
            backgroundColor: "#191D2B",
            borderBottom: "2px solid #8A95AA",
          }}
        >
          Choose CV Language
        </Popover.Title>
        <Popover.Content style={{ backgroundColor: "#191D2B" }}>
          <div className="d-flex justify-content-center">
            <a
              href={process.env.PUBLIC_URL + "/cv/simon_sanchez_cv_en.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <span
                className="flag-icon flag-icon-gb mx-3"
                style={{
                  width: "24px",
                  height: "24px",
                }}
              ></span>
            </a>

            <a
              href={process.env.PUBLIC_URL + "/cv/simon_sanchez_cv_es.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <span
                className="flag-icon flag-icon-es mx-3"
                style={{
                  width: "24px",
                  height: "24px",
                }}
              ></span>
            </a>
          </div>
        </Popover.Content>
      </Popover>
    }
  >
    <a variant="success">Download CV</a>
  </OverlayTrigger>
);

export default MyPopover;
