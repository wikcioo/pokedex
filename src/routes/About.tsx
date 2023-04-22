import { Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Heading>This is an about page. That's about it.</Heading>
      <Link to="/home">
        <Button>Back</Button>
      </Link>
    </>
  );
};

export default About;
