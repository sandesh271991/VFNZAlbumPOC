'use strict';
module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
          id: 1,
        },
        {
          id: 2,
        }
      ]
    });
  }
};