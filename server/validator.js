const Joi = require('joi');

const pages = {
  validate: (page) => Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().min(10).required(),
    contentBlock: Joi.array(),
  }).validate(page),
};

const contentBlocks = {
  validate: (contentBlock) => Joi.object({
    title: Joi.string().min(3).required(),
    body: Joi.string().min(20).required(),
  }).validate(contentBlock),
};

module.exports = {
  pages,
  contentBlocks,
};
