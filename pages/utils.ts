/**
 * sanitize input to prevent XSS attacks
 * @param input 
 * @returns input with HTML special characters escaped
 */
export function escapeHTML(input: string): string {
    return input
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }