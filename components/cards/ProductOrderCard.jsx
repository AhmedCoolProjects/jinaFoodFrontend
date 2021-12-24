import images from "constants/images";
import Image from "next/image";
import { IconButton } from "@mui/material";
import {
  AddBoxRounded,
  IndeterminateCheckBoxRounded,
} from "@mui/icons-material";

function ProductOrderCard({ prod }) {
  return (
    <div className="w-full space-x-3 p-3 items-center flex flex-row">
      <Image
        src={images.burak}
        width={110}
        height={110}
        alt="burak"
        objectFit="cover"
      />
      <div className="flex px-3 flex-col flex-1">
        <h1 className="text-xl">title here</h1>
        <h1 className="text-yellow-400 ">50 $</h1>

        <div className="flex flex-row py-2 items-center">
          <IconButton onClick={() => {}} size="small">
            <IndeterminateCheckBoxRounded fontSize="small" />
          </IconButton>
          <h1 className="flex-1 text-base text-center font-semibold">5</h1>
          <IconButton onClick={() => {}} size="small">
            <AddBoxRounded fontSize="small" />
          </IconButton>
        </div>
        <h1 className="text-yellow-400 text-right">200 $</h1>
      </div>
    </div>
  );
}

export default ProductOrderCard;
