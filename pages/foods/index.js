import Head from "next/head";
import { Grid } from "@mui/material";
import FoodCard from "@comp/cards/FoodCard";
import fakeData from "@as/data/fakedata.json";

function Index() {
  return (
    <div>
      <Head>
        <title>Jina Food | Foods</title>
      </Head>
      <div className="w-full pt-4">
        <Grid container spacing={3}>
          {fakeData.foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
          {fakeData.foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
          {fakeData.foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Index;
