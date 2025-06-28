/**
 * 🔤 Converts a string to a URL-safe slug
 * @param {string} text - Input string to be slugified
 * @returns {string} - Clean URL slug
 */
export const generateSlug = (text) => {
  if (!text) return '';

  return text
    .toString()
    .normalize('NFKD')                          // Unicode normalization
    .replace(/[\u0300-\u036F]/g, '')            // Remove diacritics
    .toLowerCase()
    .trim()
    .replace(/&/g, '-and-')                     // Replace '&' with 'and'
    .replace(/[^a-z0-9]+/g, '-')                // Replace non-alphanumeric with hyphen
    .replace(/^-+|-+$/g, '');                   // Trim hyphens from ends
};
