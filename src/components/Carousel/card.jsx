import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ image, title, description, buttonText }) => {
  const [openImage, setOpenImage] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);

  // Numero massimo di caratteri per mostrare la descrizione direttamente (altrimenti va nel dialog)
  const maxDescriptionLength = 50;

  return (
    <>
      {/* Card con il bottone per aprire l'immagine */}
      <Card
        sx={{
          width: "300px",
          height: "320px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardMedia sx={{ height: 150 }} image={image} title={title} />
        <CardContent sx={{ flexGrow: 1 }}>
          {/* Titolo con altezza minima e sempre a capo */}
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
              maxWidth: "220px", // impostare la larghezza massima del contenitore
            }}
          >
            {title}
          </Typography>

          {/* Se la descrizione è lunga, mostra un'icona per aprirla */}
          {description.length > maxDescriptionLength ? (
            <IconButton
              onClick={() => setOpenDescription(true)}
              sx={{ padding: 0 }}
            >
              <InfoOutlinedIcon color="primary" />
            </IconButton>
          ) : (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
        </CardContent>

        {/* Pulsanti sempre allineati in basso */}
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button
            size="small"
            variant="outlined"
            color="info"
            onClick={() => setOpenImage(true)}
          >
            {buttonText}
          </Button>
        </CardActions>
      </Card>

      {/* Dialog per visualizzare l'immagine a schermo intero */}
      <Dialog
        open={openImage}
        onClose={() => setOpenImage(false)}
        maxWidth="lg"
      >
        <IconButton
          sx={{ position: "absolute", top: 10, right: 10 }}
          onClick={() => setOpenImage(false)}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={image}
            alt={title}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </DialogContent>
      </Dialog>

      {/* Dialog per visualizzare la descrizione completa */}
      <Dialog
        open={openDescription}
        onClose={() => setOpenDescription(false)}
        maxWidth="sm"
      >
        <DialogTitle>
          {title}
          <IconButton
            sx={{ position: "absolute", top: 10, right: 10 }}
            onClick={() => setOpenDescription(false)}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">{description}</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};
