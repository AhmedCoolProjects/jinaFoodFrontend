import { Paper } from "@mui/material";
import images from "constants/images";
import Image from "next/image";

function CommentCard({ comment }) {
  return (
    <Paper
      className="p-4 flex flex-row min-w-[450px] items-center space-x-4 rounded-2xl"
      elevation={3}
    >
      <div className="flex flex-1 items-center flex-col">
        <h1 className="text-xl ">&quot;{comment.text}&quot;</h1>
        <h1 className="italic opacity-80 text-base">{`${comment.user.last_name} ${comment.user.first_name}`}</h1>
      </div>
      <Image
        objectFit="cover"
        width={170}
        height={170}
        className="rounded-full"
        alt={comment.user.first_name}
        src={images.burak}
      />
    </Paper>
  );
}

export default CommentCard;
