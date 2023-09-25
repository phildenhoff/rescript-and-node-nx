import express from 'express';
import { compoundInterest } from '@org/finance';
 
console.log(compoundInterest(100, 0.05, 10));
 
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
 
const app = express();
 
app.get('/', (req, res) => {
  const computed = compoundInterest(100, 0.05, 10);
  res.send({ message: computed});
});
 
app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
