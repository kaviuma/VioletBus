let path = require("path");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let signup = require(path.join(__dirname,"..","model","Signup.model"))

module.exports = {
    signup : async (req,res)=>{
        console.log(req.body);
        
        let {name,email,password} = req.body;
        let Email = await signup.findOne({email});
        if(Email){
            return res.json({msg :  "Email Already Have"})
        }
        let hashpassword = await bcrypt.hash(password,10);

        signup.create({name,email,password:hashpassword})
        .then(()=>{
            return res.json({
        msg  : "Account Created",
        status:true
    })
        })
        .catch(()=>{
    return res.json({
        msg :"Error to create account",
        status:false
    })

})

    },
  signin: async(req,res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ msg: "Email & password required", status: false });
    }

    const check = await signup.findOne({ email });
    if (!check) {
      return res.json({ msg: "Email not found", status: false });
    }

    // password check
    const isMatch = await bcrypt.compare(password, check.password);
    if (!isMatch) {
      return res.json({ msg: "Incorrect password", status: false });
    }

    const token = jwt.sign({ email: check.email, id: check._id }, process.env.KEY, { expiresIn: "30m" });

    res.json({
      data: check,
      token,
      status: true,
      msg: "Login successful",
    });

  } catch (error) {
    console.log(error);
    res.json({ msg: "Login unsuccessful", status: false });
  }
}

}