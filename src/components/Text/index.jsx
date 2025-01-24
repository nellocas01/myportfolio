import { Typography } from "@mui/material";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ variant, text, colors, style }) => {
  return (
    <Typography
      variant={variant}
      sx={{ ...style, flexGrow: 1, display: "flex" }}
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
