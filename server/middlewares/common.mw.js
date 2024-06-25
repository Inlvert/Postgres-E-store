module.exports.paginate = async (req, res, next) => {
  try {
    const {
      query: { page, results },
    } = req;

    req.pagination ={
      limit: results > 9 ? 9 : results,
      offset: page > 1 ? results * (page - 1) : 0
    };

    next();
  } catch (error) {
    next(error);
  }
};
