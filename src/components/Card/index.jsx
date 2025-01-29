import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  CardHeader,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import Dialog from "../Dialog";
import { Info } from "@mui/icons-material";

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
      <Card sx={{ backgroundColor: "transparent" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: bgAvatarColor }} aria-label="recipe">
              {avatar}
            </Avatar>
          }
          title={title}
          subheader={subheader}
        />
        <CardMedia component="img" height="194" image={image} alt={alt} />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {cardContent}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button>{btn}</Button>
          <IconButton onClick={handleOpen}>
            <Info />
          </IconButton>
        </CardActions>
      </Card>
      <Dialog open={open} handleClose={handleClose} />
    </>
  );
};
