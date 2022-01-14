import _ from "lodash";

const paginate = (item, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(item).slice(startIndex).take(pageSize).value();
};

export default paginate;
