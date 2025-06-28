/**
 * 💰 Formats a number as Indian Rupee currency
 * @param {number|string} amount - Numeric amount (can be stringified number)
 * @param {boolean} [showDecimals=false] - Optional: show paisa (fractional digits)
 * @returns {string} - ₹ formatted string
 */
export const formatPrice = (amount, showDecimals = false) => {
  const numericAmount = Number(amount);

  if (isNaN(numericAmount) || numericAmount <= 0) return '₹0';

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  }).format(numericAmount);
};
