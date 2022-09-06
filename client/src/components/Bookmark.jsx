import { useState, useEffect } from 'react'
import { FaSearch, FaBookmark, FaRegBookmark } from 'react-icons/fa'

export const Bookmark = () => {
  const [bookmark, setBookmark] = useState(false)
  return (
    <div>
      <div onClick={() => setBookmark(true)}>
        {bookmark ? <FaBookmark size={30} /> : <FaRegBookmark size={30} />}
      </div>
    </div>
  )
}
