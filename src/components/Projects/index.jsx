import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Container,
} from "@mui/material";

const projects = [
  {
    title: "Progetto 1",
    description: "Descrizione breve del progetto 1",
    image: "/assets/images/project1.jpg",
    link: "https://github.com/progetto1",
  },
  {
    title: "Progetto 2",
    description: "Descrizione breve del progetto 2",
    image: "/assets/images/project2.jpg",
    link: "https://github.com/progetto2",
  },
];

const Projects = () => {
  return (
    <Container container spacing={3} sx={{ padding: "2rem" }}>
      {projects.map((project, index) => (
        <Container item xs={12} md={6} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={project.link} target="_blank">
                Vai al progetto
              </Button>
            </CardActions>
          </Card>
        </Container>
      ))}
    </Container>
  );
};

export default Projects;
