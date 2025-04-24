import express from 'express';
import checkAuthentication from '../middleware/checkAuthentication.js';

const router = express.Router({ mergeParams: true });

router.use(checkAuthentication);

router.get('/', async (req, res) => {
  const e = await Collection.findOne({ oid: req.params.collectionId }, 'locations').exec();
  res.send({ locations: e });
});

router.post('/', async (req, res) => {});

router.get('/:locationId', async (req, res) => {});

router.put('/:locationId', async (req, res) => {})

export default router;