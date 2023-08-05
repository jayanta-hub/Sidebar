import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export const CustomText = ({
  Title,
  value,
  leftWidth = "36%",
  rightWidth = "60%",
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: 30,
          display: "flex",
          justifyContent: "center",
          alineItem: "center",
          marginTop: "1rem",
        }}
      >
        <Box
          sx={{
            width: leftWidth,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            flexWrap: "wrap",
            marginRight: "5px",
          }}
        >
          <Typography
            variant="subtitle1"
            style={{
              fontWeight: "lighter",
              opacity: "0.5 ",
              fontSize: "18px",
            }}
          >
            {Title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            style={{
              fontWeight: "lighter",
              opacity: "0.5 ",
            }}
          >
            :
          </Typography>
        </Box>
        <Box
          style={{
            width: rightWidth,
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            style={{
              paddingLeft: "5px",
              fontWeight: "bold",
              fontSize: "18px",
              opacity: "0.8 ",
              color: "#24262F",
            }}
          >
            {value}
          </Typography>
        </Box>
      </div>
    </>
  );
};
