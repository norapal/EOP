/**
 * Get the correct asset path with base URL prefix for GitHub Pages
 * @param path - Asset path starting with / (e.g., "/images/photo.jpg")
 * @returns Full path with base URL (e.g., "/EOP/images/photo.jpg")
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL
  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}
