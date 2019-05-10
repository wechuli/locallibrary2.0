const Joi = require("@hapi/joi");

module.exports = {
  validateParams: (schema, name) => {
    return (req, res, next) => {
      // console.log("req.params", req.params);
      const result = Joi.validate({ param: req["params"][name] }, schema);
      // console.log(result);
      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        next();
      }
    };
  },
  validateBody: schema => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        next();
      }
    };
  },
  schemas: {
    genresSchema: Joi.object().keys({
      name: Joi.string()
        .max(5)
        .required()
    }),
    idSchema: Joi.object().keys({
      param: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
    })
  }
};
