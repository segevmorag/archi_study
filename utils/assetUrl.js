/**
 * Resolves asset paths to work correctly on GitHub Pages.
 * Prepends BASE_URL (e.g., /architecture-study-app/) to asset paths.
 */
export function assetUrl(path) {
    if (!path) return path;
    const base = import.meta.env.BASE_URL || '/';
    // If path already starts with the base, return as-is
    if (path.startsWith(base)) return path;
    // If path starts with /, remove it and prepend base
    if (path.startsWith('/')) {
        return base + path.slice(1);
    }
    return base + path;
}
