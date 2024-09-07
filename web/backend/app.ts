import express from 'express';
import packageRoutes from './routes/packageRoutes';

const app = express();

app.use(express.json());
app.use('/api', packageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
