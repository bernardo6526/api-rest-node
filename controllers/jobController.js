const db = require('../models/');

exports.readJobs = async (req, res) => {
  const jobs = await db.Job.findAll();
  res.json(jobs);
};

exports.readJobById = async (req, res) => {
  const job = await db.Job.findByPk(req.params.id);
  if (!job) return res.status(404).send('Job not found');
  res.json(job);
};

exports.createJob = async (req, res) => {
  try {
    console.log(req.body);
    const job = await db.Job.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateJob = async (req, res) => {
  const job = await db.Job.findByPk(req.params.id);
  if (!job) return res.status(404).send('Job not found');

  await job.update(req.body);
  res.json(job);
};

exports.deleteJob = async (req, res) => {
  const Job = await db.Job.findByPk(req.params.id);
  if (!Job) return res.status(404).send('Job not found');

  await Job.destroy();
  res.status(204).send();
};