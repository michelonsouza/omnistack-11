const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required().length(8),
  }).unknown(),
});
