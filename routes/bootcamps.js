const express = require("express");
const router = express.Router();

// Routes :
// Instead of using app because we dont have access to app here we will use Express Router
// 1- Get all Bootcamps
router.get("/", (request, response) => {
  response.status(200).json({
    success: true,
    msg: "Show all Bootcamps",
  });
});
// 2- Get single Bootcamp
router.get("/:id", (request, response) => {
  response.status(200).json({
    success: true,
    msg: `Show bootcamp ${request.params.id} `,
  });
});
// 3- Create a new Bootcamp
router.post("/", (request, response) => {
  response.status(200).json({
    success: true,
    msg: "Create a new Bootcamp",
  });
});
// 4- Update a Bootcamp
router.put("/:id", (request, response) => {
  response.status(200).json({
    success: true,
    msg: `Update Bootcamp ${request.params.id}`,
  });
});
// 5- Delete a Bootcamp
router.delete("/:id", (request, response) => {
  response.status(200).json({
    success: true,
    msg: `Deleted  Bootcamp ${request.params.id}`,
  });
});

module.exports = router;
