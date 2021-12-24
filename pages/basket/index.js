import ProductOrderCard from "@comp/cards/ProductOrderCard";
import { Grid, Input, Button } from "@mui/material";
import Head from "next/head";
import { useState } from "react";

function Index() {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
  });

  return (
    <div>
      <Head>
        <title>Jina Food | Your Basket</title>
      </Head>
      <div>
        {false ? (
          <h1>Your Basket</h1>
        ) : (
          <Grid container spacing={3}>
            <Grid
              item
              className="flex flex-col items-center justify-around"
              sm={12}
              md={6}
              xs={12}
            >
              <div className="w-3/4 space-y-5 relative items-center justify-center flex flex-col">
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={userInfo.fullName}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, fullName: e.target.value })
                  }
                  fullWidth
                />
                <Input
                  type="text"
                  placeholder="Phone Number"
                  value={userInfo.phone}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phone: e.target.value })
                  }
                  fullWidth
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                  fullWidth
                />
                <Input
                  type="text"
                  placeholder="Address"
                  value={userInfo.address}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, address: e.target.value })
                  }
                  fullWidth
                />
              </div>
              <Button
                fullWidth
                size="large"
                className="mt-6"
                onClick={() => {}}
              >
                Confirme my order
              </Button>
            </Grid>
            <Grid
              item
              className="flex flex-col items-center justify-center"
              sm={12}
              md={6}
              xs={12}
            >
              <div className="w-full p-3 relative h-[390px] items-center flex flex-col border-[1px] overflow-y-auto scrollbar-hide">
                {[1, 2, 3, 4, 5].map((prod) => (
                  <ProductOrderCard key={prod} />
                ))}
              </div>
              <div className="w-full p-4 flex flex-row items-center justify-between">
                <h1 className="text-xl">Total Price:</h1>
                <h1 className="text-xl font-semibold text-yellow-400">
                  2000 $
                </h1>
              </div>
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}

export default Index;
