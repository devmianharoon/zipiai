export function capitalizeWords(str: string): string {
  return str
    .split(" ") // splits the string by spaces into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // capitalizes the first letter of each word
    .join(" "); // joins the words back into a single string
}