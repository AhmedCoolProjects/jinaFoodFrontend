import { ArrowRightAltRounded } from "@mui/icons-material";
import { Card, Grid, CardActionArea } from "@mui/material";
import Link from "next/link";

function MoreCard({ link }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link href={link} passHref>
        <CardActionArea className="w-full h-full">
          <Card className="w-full h-full flex flex-col items-center justify-center relative">
            <ArrowRightAltRounded fontSize="large" />
            <h1 className="text-xl text-center mt-2">More</h1>
          </Card>
        </CardActionArea>
      </Link>
    </Grid>
  );
}

export default MoreCard;
