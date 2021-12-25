import Head from "next/head";
import { Button } from "@mui/material";

function Index() {
  return (
    <div>
      <Head>
        <title>Jina Food | Profile: Ahmed Bargady</title>
      </Head>
      <div className="w-full flex flex-col items-center space-y-3">
        <h1 className="text-2xl text-center font-semibold">Ahmed Bargady</h1>
        <h1 className="text-xl opacity-90 mb-6 text-center">
          ahmed.bargady@esi.ac.ma
        </h1>
        <Button onClick={() => {}} size="large">
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Index;
