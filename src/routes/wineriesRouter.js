import express from 'express';

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {});

router.post('/', async (req, res) => {});

router.get('/:wineryId', async (req, res) => {});

router.put('/:wineryId', async (req, res) => {})

router.delete('/:wineryId', async (req, res) => {});

export default router;