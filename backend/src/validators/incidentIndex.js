const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
    limit: Joi.number(),
  }),
});
