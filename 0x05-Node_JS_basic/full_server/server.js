import express from 'express';
import mapRoutes from './routes';

//initialize express
const app = express();
const PORT = 1245;

mapRoutes(app);
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});

 
module.exports = app;
