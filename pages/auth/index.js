import Head from "next/head";
import { useState } from "react";
import { Container, Paper, Input, Button } from "@mui/material";

function Index() {
  const [isLogin, setIsLogin] = useState(true);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    fullName: "",
    confirmPassword: "",
  });
  return (
    <div>
      <Head>
        <title>Jina Food | {isLogin ? "Login" : "Sign up"} </title>
      </Head>
      <div className="w-full">
        <Container maxWidth="sm">
          {isLogin ? (
            <Paper elevation={3} className="flex flex-col space-y-4 w-full p-5">
              <h1 className="text-2xl text-center font-semibold">Login</h1>
              <Input
                type="email"
                placeholder="Email"
                fullWidth
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
              <Input
                type="password"
                placeholder="Password"
                fullWidth
                value={userInfo.password}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
              />
              <div className="flex flex-row w-full items-center justify-end">
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setIsLogin(false)}
                >
                  sign up?
                </Button>
              </div>
              <Button onClick={() => {}}>Login</Button>
            </Paper>
          ) : (
            <Paper elevation={3} className="flex flex-col space-y-4 w-full p-5">
              <h1 className="text-2xl text-center font-semibold">Sign up</h1>
              <Input
                type="text"
                placeholder="Full Name"
                fullWidth
                value={userInfo.fullName}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, fullName: e.target.value })
                }
              />
              <Input
                type="email"
                placeholder="Email"
                fullWidth
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
              <Input
                type="password"
                placeholder="Password"
                fullWidth
                value={userInfo.password}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
              />
              <Input
                type="password"
                placeholder="Confirme Password"
                fullWidth
                value={userInfo.confirmPassword}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, confirmPassword: e.target.value })
                }
              />
              <div className="flex flex-row w-full items-center justify-end">
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setIsLogin(true)}
                >
                  login?
                </Button>
              </div>
              <Button onClick={() => {}}>Sign up</Button>
            </Paper>
          )}
        </Container>
      </div>
    </div>
  );
}

export default Index;
