export const handleError = (error) => {
    const defaultMessage = 'Something went wrong. Please try again later.';
    console.log("this is error ",error);
  return (
    error?.response?.data?.message || error?.message || defaultMessage
  );
};