export const calculateTotalAmount = (items) => items?.reduce((total, value) => total + Number(value?.price), 0);
 
