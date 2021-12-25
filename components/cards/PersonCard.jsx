import { Grid, IconButton, Paper } from "@mui/material";
import Image from "next/image";
import images from "constants/images";
import socialMedia from "@as/data/socialmedia.json";

function PersonCard({ person }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        style={{
          borderRadius: 12,
        }}
        className="py-5 flex flex-col space-y-2 items-center w-full"
      >
        <div className="w-[200px] relative h-[200px]">
          <Image
            src={images[person.image]}
            alt={person.name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h1 className="px-1 font-light text-xl whitespace-nowrap">
          {person.name}
        </h1>

        <div className="w-full items-center py-2 justify-center space-x-2 flex flex-row">
          <IconButton href={person.linkedin} target="_blank">
            <Image
              src={socialMedia[0].image}
              width={40}
              height={40}
              alt={person.name}
            />
          </IconButton>
          <IconButton href={socialMedia[1].link} target="_blank">
            <Image
              src={socialMedia[1].image}
              width={40}
              height={40}
              alt={person.name}
            />
          </IconButton>
          <IconButton href={socialMedia[2].link} target="_blank">
            <Image
              src={socialMedia[2].image}
              width={40}
              height={40}
              alt={person.name}
            />
          </IconButton>
          <IconButton href={`mailto:${socialMedia[3].link}`} target="_blank">
            <Image
              src={socialMedia[3].image}
              width={40}
              height={40}
              alt={person.name}
            />
          </IconButton>
        </div>
      </Paper>
    </Grid>
  );
}

export default PersonCard;
