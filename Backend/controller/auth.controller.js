let path = require("path");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let nodemailer = require("nodemailer"); 
let signup = require(path.join(__dirname,"..","model","Signup.model"));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: process.env.EMAIL_USER,  
    pass: process.env.EMAIL_PASS   
  }
});

module.exports = {
  signup: async (req,res) => {
    try {
      const { name, email, password } = req.body;
      const existing = await signup.findOne({ email });
      if(existing){
        return res.json({ msg: "Email Already Exists", status: false });
      }

      const hashpassword = await bcrypt.hash(password, 10);
      const user = await signup.create({ name, email, password: hashpassword });

      // Send welcome email
      const mailOptions = {
        from: `"Violet Bus" <${process.env.EMAIL_USER}`,
        to: user.email,
        subject: "Signup Successful",
        html:`
        <p>Dear <b> ${user.name}</b> </p>
        <p>Your account has been created successfully!</p>

        `
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if(error){
          console.log("Email error:", error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      return res.json({
        msg: "Account Created",
        status: true,
        email: user.email,
        name: user.name
      });
    } catch(err) {
      console.log(err);
      return res.json({
        msg: "Error creating account",
        status: false
      });
    }
  },

  signin: async (req,res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) return res.json({ msg: "Email & password required", status: false });

      const user = await signup.findOne({ email });
      if (!user) return res.json({ msg: "Email not found", status: false });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.json({ msg: "Incorrect password", status: false });

      const token = jwt.sign({ email: user.email, id: user._id }, process.env.KEY, { expiresIn: "30m" });
      const { password: pwd, ...userData } = user._doc;

      return res.json({
        data: userData,
        token,
        status: true,
        msg: "Login successful",
        email: user.email
      });
    } catch (err) {
      console.log(err);
      return res.json({ msg: "Login unsuccessful", status: false });
    }
  }
}
