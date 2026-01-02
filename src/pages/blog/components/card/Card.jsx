import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ blog }) => {
  return (
    <Link to={`/blog/${blog._id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
        <img className="w-full" src={blog?.imageUrl} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{blog?.title}</div>
          <div className="font-bold text-xl mb-2">{blog?.subtitle}</div>
          <p className="text-gray-700 text-base">
            {blog?.description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card