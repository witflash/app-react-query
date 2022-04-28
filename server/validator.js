const Joi = require('joi');

const pages = {
  validate: (page) => Joi.validate(page, {
    name: Joi.string().min(3).required(),
    description: Joi.string().min(10).required(),
    contentBlock: Joi.array(),
  }),
};

const contentBlocks = {
  validate: (contentBlock) => Joi.validate(contentBlock, {
    title: Joi.string().min(3).required(),
    body: Joi.string().min(20).required(),
  }),
};

module.exports = {
  pages,
  contentBlocks,
};
