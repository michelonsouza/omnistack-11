const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required().length(8),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().min(5).max(15).required(),
    description: Joi.string().min(10).required(),
    value: Joi.number().required(),
  }),
});
