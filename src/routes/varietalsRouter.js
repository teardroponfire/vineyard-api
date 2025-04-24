import express from 'express';
import checkAuthentication from '../middleware/checkAuthentication';

const router = express.router();

router.use(checkAuthentication);

router.get('/', async (req, res) => {});

router.post('/', async (req, res) => {});

router.get('/:varietalId', async (req, res) => {});

router.put('/:varietalId', async (req, res) => {});

router.delete('/:varietalId', async (req, res) => {});

export default router;