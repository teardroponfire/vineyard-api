import express from 'express';
import LocationsRouter from './locationsRouter.js';
import WineriesRouter from './wineriesRouter.js';
import WinesRouter from './winesRouter.js';

import Collection from '../models/collectionModel.js';

import checkAuthentication from '../middleware/checkAuthentication.js';

const router = express.Router({ mergeParams: true });

router
  .use(checkAuthentication)
  .use('/:collectionId/locations', LocationsRouter)
  .use('/:collectionId/wineries', WineriesRouter)
  .use('/:collectionId/wines', WinesRouter);

router.get('/', async (req, res) => {
  console.log(req.auth);
  const e = await Collection.find().exec();
  console.log(e);
  res.send(e);
});

router.post('/', async (req, res) => {
  const e = new Collection(req.body);
  e.save();
  res.send(e);
});

router.get('/:collectionId', async (req, res) => {
  const e = await Collection.findOne({ oid: req.params.collectionId }).exec();
  return e;
});

router.put('/:collectionId', async (req, res) => {});

router.delete('/:collectionId', async (req, res) => {});

export default router;