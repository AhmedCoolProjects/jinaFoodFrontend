import FoodCard from "@comp/cards/FoodCard";
import ScrollStickers from "@comp/triks/ScrollStickers";
import { Container, Grid, Paper } from "@mui/material";
import images from "constants/images";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jina Food: Your Restaurant For Your Next Meal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* big picture */}
        <div className="w-full h-[480px] relative ">
          <Image
            src={images.big_pic}
            alt="big_pic_bg"
            layout="fill"
            obejectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute top-0 left-0 rounded-lg bg-black w-full h-full opacity-25  z-10"></div>
        </div>
      </div>
      <div className="relative w-full items-center flex flex-col">
        <Container className="absolute z-10 -top-32" maxWidth="md">
          <Paper elevation={5} className="w-full mb-4 z-10 h-[320px]">
            {/* <Image />
          <div></div> */}
          </Paper>
          <ScrollStickers />
          {/* foods list */}
          <h1 className="text-2xl text-center">Special Offers</h1>
          <hr className="h-px bg-white w-full my-5" />
          {/* <Grid container spacing={3}>
            {[1].map((food) => (
              <Grid key={food.id} xs={12} md={4} sm={6}>
                <FoodCard food={food} />
              </Grid>
            ))}
          </Grid> */}
        </Container>
      </div>
    </div>
  );
}
