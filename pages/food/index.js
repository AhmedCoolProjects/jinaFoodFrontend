import Head from "next/head";
import { useRouter } from "next/router";
import fakeData from "@as/data/fakedata.json";
import { Grid, Button } from "@mui/material";
import Image from "next/image";
import { AddShoppingCartRounded } from "@mui/icons-material";

function Index() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Jina Food | Food: {id} </title>
      </Head>
      <div className="w-full">
        <Grid container spacing={3}>
          <Grid
            item
            className="flex flex-col items-center justify-center"
            sm={12}
            md={6}
            xs={12}
          >
            <div className="w-3/4 relative min-h-[320px] items-center justify-center flex flex-col">
              <Image
                src={fakeData.foods[0].images[0]}
                alt="food"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Grid>
          <Grid
            className="flex flex-col items-center justify-center"
            item
            sm={12}
            md={6}
            xs={12}
          >
            <div className="w-full flex-1 h-full flex flex-col">
              <h1 className="text-2xl opacity-90 text-left">
                {fakeData.foods[0].title}
              </h1>
              <h1 className="text-2xl font-semibold mt-3 opacity-90 text-yellow-400 text-left">
                {fakeData.foods[0].salePrice.toFixed(2).split(".")[0]}.
                <sup>
                  {fakeData.foods[0].salePrice.toFixed(2).split(".")[1]}
                </sup>
                $
              </h1>
              <h1 className="text-base text-left mt-3">
                {fakeData.foods[0].description}
              </h1>
            </div>
            <Button
              endIcon={<AddShoppingCartRounded fontSize="medium" />}
              onClick={() => {}}
              size="large"
              fullWidth
            >
              add to your order
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Index;
