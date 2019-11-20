import dotenv from 'dotenv';

import { app } from './src/app';

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.info(`http://localhost:${port}`);
});
