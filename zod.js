const z = require("zod")

const userschema = z.object({
    username : z.email(),
    name : z.string().optional(),
    password : z.string(),
    dob : z.date().optional()
})


module.exports = userschema;
