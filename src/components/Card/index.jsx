import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  CardHeader,
  Avatar,
  IconButton,
  Box,
  Link,
} from "@mui/material";
import Dialog from "../Dialog";
import { Info } from "@mui/icons-material";
import "./style.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  bgAvatarColor,
  avatar,
  title,
  subheader,
  image,
  alt,
  cardContent,
  btn,
  repoUrl,
  dialog,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "transparent",
          "&:hover": {
            boxShadow: "none",
          },
        }}
        className="container"
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: bgAvatarColor }} aria-label="recipe">
              {avatar}
            </Avatar>
          }
          title={title}
          subheader={subheader}
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt={alt}
          className="image"
          sx={{ width: "100%", height: "auto" }}
        />
        <Box className="middle">
          <CardContent
            className="text"
            sx={{ padding: 0, backgroundColor: "transparent" }}
          >
            <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
              {btn}
            </Link>
          </CardContent>
        </Box>
        <CardActions disableSpacing>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", marginRight: 1 }}
          >
            {cardContent}
          </Typography>
          <IconButton onClick={handleOpen}>
            <Info />
          </IconButton>
        </CardActions>
      </Card>
      <Dialog open={open} handleClose={handleClose} dialog={dialog} />
    </>
  );
};
