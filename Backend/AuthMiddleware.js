const supabase = require('./Config/supabase');
const User = require('./Models/User'); 

const authMiddleware = async (req, res, next) => {
  
  const token = req.headers['authorization']?.split(" ")[1]
  if (!token) return res.status(401).send({message: "Not Authorized, token is missing"})

  try {
    const {data, error} = await supabase.auth.getUser(token)

    if (error)  throw error 
    
    // Find the user in MongoDB
    console.log(data.user)
    const user = await User.findOne({ supabaseId: data.user.id });

    if (!user) {
      throw new Error('User not found in database');
    }

    req.user = {
      ...data.user,
      _id: user._id  // Add the MongoDB _id to the user object
    }
    next()

  } catch(e) {
    console.log("Error:", e.message)
    res.status(401).send({message: e.message})
  }
};

module.exports = authMiddleware;