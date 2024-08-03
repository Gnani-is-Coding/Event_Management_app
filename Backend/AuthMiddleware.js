const supabase = require('./Config/supabase');

const authMiddleware = async (req, res, next) => {
  const token = req.headers['authorization']?.split(" ")[1]
  console.log(token)
  if (!token) return res.status(401).send({message: "Not Authorized, token is missing"})

  try {
    const {data, error} = await supabase.auth.getUser(token)

    if (error)  throw error 
    
    console.log(data.user, "from supabase")

    req.user = data.user
  } catch(e) {
    console.log("Error:", e.message)
    res.status(401).status({message: e.message})
    
  }

  // next()
};

module.exports = authMiddleware;