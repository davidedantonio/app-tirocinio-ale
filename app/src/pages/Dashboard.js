import React from "react";
import { 
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography
} from "@mui/material";
import { red } from "@mui/material/colors";
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={2} lg={3}>
        <Card>
          <CardHeader
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/f3d7d1b4-4df6-4d72-b2f0-acf05cccae08/Derivates/4513fa48-f03c-4f8e-bea0-18385dd4bdd0.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dashboard;