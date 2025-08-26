exports.handler = async (event) => {
  const { body } = event;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: body }),
  };
};