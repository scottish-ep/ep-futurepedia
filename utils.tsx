export const isArray = (data: any) => {
  const _ = require('lodash');

  if (_.isArray(data) && data.length > 0) {
    return true;
  }
  return false;
} 