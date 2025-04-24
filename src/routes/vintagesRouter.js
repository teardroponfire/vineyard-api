import express from 'express';
import Bottles from './bottlesRouter.js';

const router = express.Router({ mergeParams: true });

router.use('bottles', Bottles);

router.get('/', async (req, res) => {});

router.post('/', async (req, res) => {});

router.get('/:vintageId', async (req, res) => {});

router.put('/:vintageId', async (req, res) => {});

router.delete('/:vintageId', async (req, res) => {});

export default router;