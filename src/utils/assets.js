// Utility function to get correct asset paths with base URL
export const getAssetPath = (path) => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Vite's import.meta.env.BASE_URL already includes the trailing slash
  // In development, BASE_URL is '/', in production it's '/RivasEmilio.github.io/'
  const baseUrl = import.meta.env.BASE_URL
  // Ensure we don't have double slashes
  const finalPath = baseUrl.endsWith('/') 
    ? `${baseUrl}${cleanPath}` 
    : `${baseUrl}/${cleanPath}`
  return finalPath
}
