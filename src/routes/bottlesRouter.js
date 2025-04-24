import express from 'express';
import checkAuthentication from '../middleware/checkAuthentication.js';

const router = express.Router({ mergeParams: true });

router.use(checkAuthentication);

router.get('/', async (req, res) => {});

router.post('/', async (req, res) => {});

router.get('/:bottleId', async (req, res) => {});

router.put('/:bottleId', async (req, res) => {});

router.delete('/:bottleId', async (req, res) => {});

export default router;