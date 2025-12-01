/**
 * Get the correct asset path with base URL prefix
 * Works with both local development and GitHub Pages deployment
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // In production with base: './', we need relative paths
  return `./${cleanPath}`
}
