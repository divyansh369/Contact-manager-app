const {constants}=require("../constant");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "not found",
        message: err.message,
        stackTrace: err.stack,
      });

      break;
    case  constants.NOT_FOUND:
        res.json({
          title: "Validation failed",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
    case  constants.UNAUTHORISED:
        res.json({
          title: "Validation failed",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
    case  constants.FORBIDDEN:
        res.json({
          title: "Validation failed",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
    case  constants.SERVER_ERROR:
        res.json({
          title: "Validation failed",
          message: err.message,
          stackTrace: err.stack,
        });
        break;

    default:
        console.log("no error");
      break;
  }
};

module.exports = errorHandler;
