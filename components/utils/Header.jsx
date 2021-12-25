import SocialMediaData from "@as/data/socialmedia.json";
import { IconButton, Button } from "@mui/material";
import Link from "next/link";
import { ShoppingCartRounded } from "@mui/icons-material";
import Image from "next/image";

function Header() {
  return (
    <header className="w-full relative flex flex-col">
      <div className="w-full justify-between relative flex flex-row py-3">
        <Link href="/about" passHref>
          <Button className="z-10">About</Button>
        </Link>
        <div className="flex absolute top-0 left-0 w-full h-full flex-col justify-center items-center">
          <Link href="/">
            <h1 className="text-2xl cursor-pointer font-semibold text-white">
              Jina Food
            </h1>
          </Link>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <Link href={false ? "/auth" : "/profile"} passHref>
            <Button size="small" className="z-10">
              {false ? "Login" : "Profile"}
            </Button>
          </Link>
          <Link href="/basket" passHref>
            <IconButton>
              <ShoppingCartRounded color="primary" />
            </IconButton>
          </Link>
        </div>
      </div>
      <hr className="h-px bg-gray-400 opacity-90 w-full" />
      <div className="w-full justify-end items-center flex flex-row py-2">
        <div className="flex justify-center flex-row space-x-2">
          {SocialMediaData.map((item) => (
            <IconButton key={item._id} href={item.link} target="_blank">
              <Image
                className="rounded-full"
                objectFit="contain"
                src={item.image}
                width={25}
                height={25}
                alt={item.title}
              />
            </IconButton>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
