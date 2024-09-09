export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 1 }, { id: 2 }, { id: 3 }]
}

export default async function sitemap({ id }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()

  return [{
    url: `http://localhost:3000/jobs/${post.id}`,
    lastModified: new Date(),
  }]
}