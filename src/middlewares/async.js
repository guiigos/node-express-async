import httpStatus from 'http-status';

const handleResponse = (res, data) => res.status(httpStatus.OK).send(data);
const handleError = (res, error) => res.status(httpStatus.BAD_REQUEST).send(error);

export default function promiseMiddleware() {
  return (req, res, next) => {
    res.async = (promise) => {
      return promise
        ?.then((data) => handleResponse(res, data))
        ?.catch((error) => handleError(res, error));
    };

    return next();
  };
};
