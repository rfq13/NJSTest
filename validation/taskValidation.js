const yup = require("yup");
const validate = {};

validate.create = yup.object({
  body: yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    done: yup.boolean().nullable().notRequired().default(false),
  }),
});

validate.update = yup.object({
  body: yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    done: yup.boolean().nullable().notRequired(),
  }),
  params: yup.object({
    id: yup.string().uuid().required(),
  }),
});

validate.delete = yup.object({
  params: yup.object({
    id: yup.string().uuid().required(),
  }),
});

validate.getOne = yup.object({
  params: yup.object({
    id: yup.string().uuid().required(),
  }),
});

module.exports = validate;
