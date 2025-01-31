import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ open, handleClose, dialog }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{dialog?.title}</DialogTitle>
      <DialogContent>
        <Typography sx={{ marginBottom: 2 }}>{dialog?.description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{dialog?.btn}</Button>
      </DialogActions>
    </Dialog>
  );
};
