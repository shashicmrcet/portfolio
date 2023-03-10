import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Tilt from "react-parallax-tilt";
import "./BlogSection.css";

const BlogSection = () => {
  return (
    <div id="blogs">
      <Container>
        <h1 className="text-center font-details-b pb-4">Medium Blogs</h1>
        <CardDeck>
          <Tilt>
            <Card className="card-resize">
              <Card.Img
                className="image-resize"
                variant="top"
                src="https://miro.medium.com/max/1000/0*DPnItWaXWVDA8qGJ"
                alt="Blog 1"
              />
              <Card.Body>
                <a
                  className="text-dark text-decoration-none"
                  href="https://medium.com/@shashi.dvc29/what-are-the-differences-between-state-and-props-in-react-9e277dffcf72"
                  target="_blank"
                >
                  <Card.Title>
                    What are the differences between State and Props in React?
                  </Card.Title>
                  <Card.Text>
                    How you use props and state, and what each of them is?
                  </Card.Text>
                </a>
              </Card.Body>
            </Card>
          </Tilt>
          <Tilt>
            <Card className="card-resize">
              <Card.Img
                className="image-resize"
                variant="top"
                src="https://miro.medium.com/max/700/0*g61HreCnSrR1JDUf"
                alt="Blog 2"
              />
              <Card.Body>
                <a
                  className="text-dark text-decoration-none"
                  href="https://medium.com/@shashi.dvc29/why-i-find-javascripts-destructuring-so-useful-d987b95b30a9"
                  target="_blank"
                >
                  <Card.Title>
                    Why I JavaScript’s Destructuring So Useful
                  </Card.Title>
                  <Card.Text>Array and object destructuring</Card.Text>
                </a>
              </Card.Body>
            </Card>
          </Tilt>
          <Tilt>
            <Card className="card-resize">
              <Card.Img
                className="image-resize"
                variant="top"
                src="https://miro.medium.com/max/1000/0*3yUaO3J7RU6vTMSH"
                alt="Blog 3"
              />
              <Card.Body>
                <a
                  className="text-dark text-decoration-none"
                  href="https://medium.com/@shashi.dvc29/ab331fcf2b68"
                  target="_blank"
                >
                  <Card.Title>Why I Love The Spread Operator</Card.Title>
                  <Card.Text>
                    The Most Useful JavaScript Feature of ES6
                  </Card.Text>
                </a>
              </Card.Body>
            </Card>
          </Tilt>
          <Tilt>
            <Card className="card-resize">
              <Card.Img
                className="image-resize"
                variant="top"
                src="https://miro.medium.com/max/700/0*ofb-IyC65q82aIgq"
                alt="Blog 4"
              />
              <Card.Body>
                <a
                  className="text-dark text-decoration-none"
                  href="/"
                  target="_blank"
                >
                  <Card.Title>
                    Make Eye-Catching JavaScript Popups with ‘Sweet Alert’
                  </Card.Title>
                  <Card.Text>
                    An Attractive UI You can better alerts with
                  </Card.Text>
                </a>
              </Card.Body>
            </Card>
          </Tilt>
        </CardDeck>
      </Container>
    </div>
  );
};
export default BlogSection;
