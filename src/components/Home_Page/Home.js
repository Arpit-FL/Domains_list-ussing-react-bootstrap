import React from "react";
import "../Styles/Home.css";
import { Card, Container } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import whitelisted from "../../Images/whitelisted.png";
import reports from "../../Images/reports.png";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    props.setShowSpinner(true);
    setTimeout(() => {
      props.setShowSpinner(false);
      navigate("/domains");
    }, 2000);
  };

  const handleNavigateReport = () => {
    props.setShowSpinner(true);
    setTimeout(() => {
      props.setShowSpinner(false);
      navigate("/AnalyaticsReportList");
    }, 2000);
  };
  return (
    <>
      <div style={{ width: "100%" }}>
        <Container
          onClick={handleNavigate}
          className="container"
          style={{ marginTop: "7rem", width: "70%" }}
        >
          <Card
            className="card-shadow shadow-lg"
            style={{ height: "7rem", cursor: "pointer" }}
          >
            <Card.Body className="card-1">
              <div className="img1">
                <img src={whitelisted} alt="#" width="45px" />
                <h5 className="whitelist">
                  <strong>Whitelist</strong>
                </h5>
              </div>
              <h5>
                <BsArrowRight style={{ color: "blue" }} />
              </h5>
            </Card.Body>
          </Card>
        </Container>

        <Container
          onClick={handleNavigateReport}
          className="container1 "
          style={{ marginTop: "2rem", width: "70%" }}
        >
          <Card
            className="card-shadow shadow-lg"
            style={{ height: "7rem", cursor: "pointer" }}
          >
            <Card.Body className="card-1">
              <div className="img1">
                <img src={reports} alt="#" width="45px" />
                <h5>
                  <strong>Analytics & Records List</strong>
                </h5>
              </div>
              <h5>
                <BsArrowRight style={{ color: "blue" }} />
              </h5>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Home;
