const express = require("express");
const router = express.Router();
const RequirementSchema = require("../models/reqDetails");
//to get All User Data
router.get("/", async (req, res) => {
  const getAllUser = await RequirementSchema.find();
  res.json(getAllUser);
});
//for insert data
router.post("/new", async (req, res) => {
  const sendReq = new RequirementSchema(req.body);
  const saveReq = await sendReq.save();
  res.json(saveReq);
});
// find by skills
router.get("/skill/:skill", async (req, res) => {
  console.log(req.params.skill);
  const response = await RequirementSchema.find({
    StrongerArea: { $in: [req.params.skill] },
  });
  res.json(response);
});

// find by codechef rating
router.get("/codechef/?name&&");
module.exports = router;
