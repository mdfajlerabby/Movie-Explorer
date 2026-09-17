export function getShowYear(date) {
  return date ? date.slice(0, 4) : 'TBA'
}

export function stripHtml(value = '') {
  return value.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&#39;/g, "'").trim()
}
