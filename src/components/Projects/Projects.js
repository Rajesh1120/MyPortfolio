import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dailytasks from "../../Assets/Projects/dailytasks.jpg";
import moviepic from "../../Assets/Projects/movies.png"
import expensetracker from "../../Assets/Projects/expensetracker.png"

import tictactoe from "../../Assets/Projects/tictactoe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expensetracker}
              isBlog={false}
              title="Expense-Tracker"
              description="Records spending, categorizes expenses, sets budgets, tracks income, and provides insights to aid financial management and decision-making."
              ghLink="https://github.com/Rajesh1120/Expense_tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="My personal blog page build with React.js and Css which takes the content from makdown files and renders it using React.js. Supports multiplayers and good User Interface."
              ghLink="https://github.com/Rajesh1120/tic-tac-toe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviepic}
              isBlog={false}
              title="Movies"
              description="Database of movies, TV shows, and celebrities.Its API provides access to a vast amount of movie data including details such as movie titles, descriptions, release dates, ratings. "
              ghLink="https://github.com/Rajesh1120/Reactjs_moviesdb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dailytasks}
              isBlog={false}
              title="Daily Tasks"
              description="By using React Native , I implemented a simple mobile app which contains CRUD operations . It is user friendly flexible and fast"
              ghLink="https://github.com/Rajesh1120/todoList_ReactNative"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
