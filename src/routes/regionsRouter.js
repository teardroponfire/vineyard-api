import express from 'express';

import checkAuthentication from '../middleware/checkAuthentication.js';

const router = express.Router();

router.use(checkAuthentication);

router.get('/', async (req, res) => {});

router.post('/', async (req, res) => {});

router.get('/:regionId', async (req, res) => {});

router.put('/:regionId', async (req, res) => {});

router.delete('/:regionId', async (req, res) => {});

export default router;