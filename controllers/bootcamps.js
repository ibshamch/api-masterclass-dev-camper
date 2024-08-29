const Bootcamp = require("./../models/Bootcamp");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("./../utils/errorResponse");
// @desc -> Get all Bootcamps
// @route -> GET /api/v1/bootcamps
// @access -> Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res
    .status(200)
    .json({ success: true, count: bootcamps.length, data: bootcamps });
});

// @desc -> Get single Bootcamp
// @route -> GET /api/v1/bootcamps/:id
// @access -> Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    // To Handle Correctly Formatted Id that is not in the database , it must response back with 400

    // throw new Error(`Bootcamp not found with ID of ${req.params.id}`);
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc -> Create new Bootcamp
// @route -> POST /api/v1/bootcamps
// @access -> Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body); // wait here until response has come , if no response comes back request hangs.

  res.status(201).json({
    success: true,
    data: bootcamp,
  });
});

// @desc -> Update Bootcamp
// @route -> PUT /api/v1/bootcamps/:id
// @access -> Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) {
    // To Handle Correctly Formatted Id that is not in the database , it must response back with 400

    // throw new Error(`Bootcamp not found with ID of ${req.params.id}`);
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: bootcamp,
  });
});

// @desc -> Delete Bootcamp
// @route -> DELETE /api/v1/bootcamps/:id
// @access -> Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: {},
  });
});
