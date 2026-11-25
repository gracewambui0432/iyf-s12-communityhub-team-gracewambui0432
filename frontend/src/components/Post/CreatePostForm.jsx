import { useState } from 'react'
export default function CreatePostForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  return (
    <form onSubmit={(e) => { e.preventDefault(); alert(`Post Created: ${title}`) }}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ display: 'block', margin: '10px 0', padding: '8px', width: '300px' }} />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} style={{ display: 'block', margin: '10px 0', padding: '8px', width: '300px' }} />
      <button type="submit">Post</button>
    </form>
  )
}