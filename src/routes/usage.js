import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.async(new Promise((resolve) => resolve({
    success: true,
  })));
});

export default router;
