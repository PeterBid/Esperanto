import React from 'react'
import axios from 'axios'

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

export const ImageUploadField = ({ handleImageUrl, value }) => {

  const handleUpload = async event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    const res = await axios.post(uploadUrl, data)
    console.log(res)
    // handleImageUrl(res.data.url)
  }

  // Not entirely sure where to put this function
  // const handleImageUrl = url => {
  //   setFormData({ ...formData, displayPicture:url })
  // }

  return (
    <>
      {value ?
        <div>
          <img src={value} alt='uploaded' />
        </div>
        :
        <>
          <label>Profile Image</label>
          <input
            className="input"
            type="file"
            onChange={handleUpload}
          />
        </>
      }
    </>
  )
}
