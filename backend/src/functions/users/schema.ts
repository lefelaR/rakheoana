export default {
  type: "object",
  properties: {
    name: { type: 'string' },
    surname:{type:'string'},
    email:{type:'string'},
    password:{type:'string'},
  },
  required: ['name']
} as const;
