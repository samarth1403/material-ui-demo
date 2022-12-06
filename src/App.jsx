import React from "react";
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import useStyles from "./styles";
const cards = [1,2,3,4,5,6,7,8,9]
const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography varient="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container className={classes.container} maxWidth="sm">
            <Typography variant="h2" align="center" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h6" align="center" paragraph gutterBottom>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates sequi voluptatibus ipsum maiores, atque, ipsam dolore a
              adipisci temporibus illo facilis, nihil accusamus laborum quaerat!
              Doloremque, consequuntur? Nam, porro possimus.
            </Typography>
          </Container>

          <div>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="success">
                  See my Photos
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained">See my Photos</Button>
              </Grid>
            </Grid>
          </div>
        </div>
        <Container maxWidth='md' spacing={2}>
           
            <Grid container >
              { cards.map((card) =>{
                return (<Grid item spacing={2} key={card} sm={12} md={6} lg={4}>
                  <Card>
                    <CardMedia style={{height:'150px'}}
                    image="https://source.unsplash.com/random"
                    />
                    <CardContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iste.</CardContent>
                    <CardActions>
                      <Button>Hello</Button>
                      <Button>Hii</Button>
                    </CardActions>
                  </Card>
                </Grid>)})}
            </Grid>
        </Container>
      </main>
    </>
  );
};

export default App;
