const express = require('express');
const router = express.Router();
const Account = require('../models/Account');

router.get('/', async (req, res) => {
  try {
    const { rank, minPrice, maxPrice, keyword, sort } = req.query;
    let query = {};

    if (rank) query.rank = rank;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (keyword) {
      query.$or = [
        { title: { $regex: keyword, $options: 'i' } },
        { rank: { $regex: keyword, $options: 'i' } },
        { description: { $regex: keyword, $options: 'i' } }
      ];
    }

    let sortOption = { createdAt: -1 };
    if (sort === 'priceAsc') sortOption = { price: 1 };
    if (sort === 'priceDesc') sortOption = { price: -1 };
    if (sort === 'skinsDesc') sortOption = { skins: -1 };

    const accounts = await Account.find(query).sort(sortOption);
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) return res.status(404).json({ message: '账号不存在' });
    res.json(account);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const account = new Account(req.body);
    const newAccount = await account.save();
    res.status(201).json(newAccount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const account = await Account.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!account) return res.status(404).json({ message: '账号不存在' });
    res.json(account);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const account = await Account.findByIdAndDelete(req.params.id);
    if (!account) return res.status(404).json({ message: '账号不存在' });
    res.json({ message: '账号已删除' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
