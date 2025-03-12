import React from 'react'

export default function Review() {
  return (
    <div>
        <ul className="rating">
            <li><i className="bi bi-star-fill"></i></li>
            <li><i className="bi bi-star-fill"></i></li>
            <li><i className="bi bi-star-half"></i></li>
            <li class="disable">&nbsp;( 1 reviews )</li>
        </ul>
    </div>
  )
}
