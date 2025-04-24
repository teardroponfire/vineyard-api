import express from 'express';
import Vintages from './vintagesRouter.js';

const router = express.Router({ mergeParams: true });

router.use('vintages', Vintages);

router.get('/', async (req, res) => {});

router.post('/', async (req, res) => {});

router.get('/:wineId', async (req, res) => {});

router.put('/:wineId', async (req, res) => {});

router.delete('/:wineId', async (req, res) => {});

export default router;