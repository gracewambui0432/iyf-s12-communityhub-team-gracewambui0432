import { useParams } from 'react-router-dom'
export default function PostDetail() {
  const { id } = useParams()
  return <div><h2>Post Detail</h2><p>Showing post ID: {id}</p></div>
}