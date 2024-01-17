import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ButtonRouter from "../../components/Button/ButtonRouter";

import ButtonLink from "../../components/Button/ButtonLink";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({
  title,
  subheader,
  image,
  description,
  price,
  service_details,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Comparte esto",
          url: "https://rodriguezfallasluis.com/collaborate",
          text: "Echa un vistazo a esta página interesante.",
        })
        .then(() => console.log("Contenido compartido con éxito"))
        .catch((error) => console.log("Error al compartir", error));
    } else {
      console.log("La Web Share API no está soportada en este navegador.");
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "16px",
        backgroundColor: "#242836",
        color: "white",
      }}
    >
      <CardHeader
        title={title}
        subheader={subheader}
        align="center"
        sx={{
          "& .MuiCardHeader-subheader": {
            color: "rgba(255, 255, 255, 0.7)",
          },
        }}
      />
      <CardMedia
        component="img"
        height="auto"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="white" align="center">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="share"
          sx={{ color: "white" }}
          onClick={handleShare}
        >
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ color: "white" }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" sx={{ color: "#ffbf00" }}>
            Price
          </Typography>
          <Typography variant="body1">{price}</Typography>
          <br />
          <Typography variant="h6" sx={{ color: "#ffbf00" }}>
            Service Details
          </Typography>
          <Typography variant="body2" align="center">
            {service_details}
          </Typography>
          <br />
          <ButtonLink href={`https://wa.me/50670529997?text=Hello, I'm interested in your services as ${title}%0ACan we schedule a meeting?`} target="_blank">
            Contact via WhatsApp
          </ButtonLink>
        </CardContent>
      </Collapse>
    </Card>
  );
}
