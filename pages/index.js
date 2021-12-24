import FoodCard from "@comp/cards/FoodCard";
import ScrollStickers from "@comp/triks/ScrollStickers";
import { Container, Grid, Paper, Input, Button } from "@mui/material";
import images from "constants/images";
import Head from "next/head";
import fakeData from "@as/data/fakedata.json";
import { Telegram } from "@mui/icons-material";
import Image from "next/image";
import CommentCard from "@comp/cards/CommentCard";
import { useState } from "react";
import MoreCard from "@comp/cards/MoreCard";

export default function Home() {
  const [specialCustomerEmail, setSpecialCustomerEmail] = useState("");
  return (
    <div>
      <Head>
        <title>Jina Food | Your Restaurant For Your Next Meal</title>
      </Head>
      <div>
        {/* big picture */}
        <div className="w-full min-h-[480px] relative ">
          <Image
            src={images.big_pic}
            alt="big_pic_bg"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute top-0 left-0 rounded-lg bg-black w-full h-full opacity-25  z-10"></div>
        </div>
      </div>
      <div className="w-full items-center flex flex-col">
        <Container
          className="relative z-10 items-center flex flex-col"
          maxWidth="md"
        >
          <Paper
            elevation={5}
            className="w-full left-0 absolute overflow-hidden rounded-2xl -top-32 mb-4 z-10 h-[320px]"
          >
            <div className="w-full h-full flex flex-row">
              <div className="w-1/2 overflow-hidden relative h-full">
                <Image
                  src={images.place}
                  alt="place"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex relative items-center w-1/2 p-6 space-y-3 flex-col">
                <h1 className="text-xl text-center ">Find Us</h1>
                <hr className="w-11/12 h-px opacity-75" />
                <h1 className="text-xl text-left ">
                  Avenue Allal El Fassi, RABAT 10100
                </h1>
              </div>
            </div>
          </Paper>
          <ScrollStickers />
          {/* foods list */}
          <h1 className="text-2xl text-center">Special Offers</h1>
          <hr className="h-px bg-white w-full my-5" />
          <Grid container spacing={3}>
            {fakeData.foods.slice(0, 5).map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
            <MoreCard link="/foods" />
          </Grid>
        </Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <h1 className="text-2xl mt-4 text-center">
              Become Special Customer
            </h1>
            <hr className="h-px bg-white w-full my-5" />
            <div className="mx-4 min-h-[200px] items-center justify-center flex flex-col relative">
              <Input
                type="email"
                autoFocus
                placeholder="Enter your email"
                fullWidth
                value={specialCustomerEmail}
                onChange={(e) => setSpecialCustomerEmail(e.target.value)}
              />
              <Button
                style={{
                  marginTop: 24,
                }}
                fullWidth
                color="primary"
                size="large"
                endIcon={<Telegram color="primary" fontSize="medium" />}
              >
                submit
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <h1 className="text-2xl mt-4 text-center">Our Chef Word</h1>
            <hr className="h-px bg-white w-full my-5" />
            <Paper className="p-5 flex flex-col items-center space-y-2">
              <Image
                objectFit="cover"
                className="rounded-full"
                src={images.burak}
                alt="chef_word"
                width={160}
                height={160}
              />
              <h1 className="text-xl text-center">
                "Jina Food is where you can find the best food with the best
                price and the best quality."
              </h1>
              <h1 className="text-right opacity-80 italic text-base">
                - CZN Burak
              </h1>
            </Paper>
          </Grid>
        </Grid>
        <div className="w-full">
          <h1 className="text-2xl mt-4 text-center">
            Some Of Our Customers Comments
          </h1>
          <hr className="h-px bg-white w-full my-5" />
          <div className="w-full items-center space-x-3 flex flex-row overflow-y-auto scrollbar-hide ">
            {fakeData.comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
