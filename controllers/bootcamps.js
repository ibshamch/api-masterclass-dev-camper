// @desc -> Get all Bootcamps
// @route -> GET /api/v1/bootcamps
// @access -> Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Show all Bootcamps",
  });
};

// @desc -> Get single Bootcamp
// @route -> GET /api/v1/bootcamps/:id
// @access -> Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Show bootcamp ${req.params.id} `,
  });
};

// @desc -> Create new Bootcamp
// @route -> POST /api/v1/bootcamps
// @access -> Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Create a new Bootcamp",
  });
};

// @desc -> Update Bootcamp
// @route -> PUT /api/v1/bootcamps/:id
// @access -> Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update Bootcamp ${req.params.id}`,
  });
};

// @desc -> Delete Bootcamp
// @route -> DELETE /api/v1/bootcamps/:id
// @access -> Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Deleted  Bootcamp ${req.params.id}`,
  });
};
