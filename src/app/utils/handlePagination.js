const handlePafination = (colection, query) => {
  const { limit = 16, page = 0, ...queryParam } = query;

  const skipPage = page * limit;
  const checkSkipPage = Math.max(0, skipPage);

  const data = colection
    .find({ ...queryParam })
    .limit(limit)
    .skip(checkSkipPage);

  return data;
};

export default handlePafination;
