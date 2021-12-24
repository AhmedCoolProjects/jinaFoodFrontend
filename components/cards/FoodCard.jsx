import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Collapse,
  Grid,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ExpandMore, Launch } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: 8,
    marginRight: 8,
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
    marginLeft: 8,
    marginRight: 8,
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

function FoodCard({ food }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className="w-full relative">
        <Link
          href={{
            pathname: "/food",
            query: {
              id: food.id,
            },
          }}
          passHref
        >
          <CardActionArea>
            <div className="w-full relative h-[250px]">
              <Image
                layout="fill"
                objectFit="cover"
                src={food.images[0]}
                alt={food.title}
              />
            </div>
          </CardActionArea>
        </Link>
        <div className="flex w-full justify-between flex-row items-center p-3 relative">
          <h1 className="text-xl ">{food.title}</h1>
          <h1 className="text-xl opacity-80">
            {food.salePrice.toFixed(2).split(".")[0]}.
            <sup>{food.salePrice.toFixed(2).split(".")[1]}</sup>$
          </h1>
        </div>
        <div className="flex w-full flex-row items-center justify-end p-2 relative">
          <IconButton
            className={expanded ? classes.expandOpen : classes.expand}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <h1 className="text-xl underline">ingredients:</h1>
            <ul className="flex-wrap w-full p-2">
              {food.ingredients.map((ingr) => (
                <li className="list-item text-sm font-semibold" key={ingr}>
                  {ingr}
                </li>
              ))}
            </ul>
            {/* <Link
              href={{
                pathname: "/food",
                query: {
                  id: project.id,
                },
              }}
              passHref
            >
              <Button
                variant="outlined"
                fullWidth
                color="primary"
                style={{ marginTop: 12 }}
                endIcon={<Launch color="primary" />}
              >
                check more
              </Button>
            </Link> */}
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

export default FoodCard;
