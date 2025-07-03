import { Typography } from "@mui/material";
import "../About/style.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ id, className, variant, text, colors, style, onClick }) => {
  return (
    <Typography
      id={id}
      className={className}
      variant={variant}
      sx={{ ...style, flexGrow: 1, display: "flex" }}
      onClick={onClick}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            color: colors[index % colors.length], // alterna i colori
            fontWeight: "bold",
          }}
        >
          {char}
        </span>
      ))}
    </Typography>
  );
};
