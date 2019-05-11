const BaseJoi = require("@hapi/joi");
const DateExtension = require("@hapi/joi-date");
const Joi = BaseJoi.extend(DateExtension);

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
    }),
    authorCreateSchema: Joi.object().keys({
      firstname: Joi.string()
        .max(50)
        .required(),
      lastname: Joi.string()
        .max(50)
        .required(),
      date_of_birth: Joi.date()
        .format("YYYY-MM-DD")
        .required(),
      date_of_death: Joi.date().format("YYYY-MM-DD"),
      bio: Joi.string()
        .max(2000)
        .required()
    }),
    authorEditSchema: Joi.object().keys({
      firstname: Joi.string().max(50),
      lastname: Joi.string().max(50),
      date_of_birth: Joi.date().format("YYYY-MM-DD"),
      date_of_death: Joi.date().format("YYYY-MM-DD"),
      bio: Joi.string().max(2000)
    })
  }
};
