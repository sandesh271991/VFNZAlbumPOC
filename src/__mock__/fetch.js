export default function() {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
        },
        {
          id: 2,
        }
      ])
  })
}