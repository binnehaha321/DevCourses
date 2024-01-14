import { useState, useEffect } from 'react'
import { checkThumbnailErrors } from '../../../store/courses/courses.action'

function ValidatedImage({ src, alt, defaultImageUrl }) {
  const [validatedSrc, setValidatedSrc] = useState(null)

  useEffect(() => {
    const validateImage = async () => {
      const validImageUrl = await checkThumbnailErrors(src, defaultImageUrl)
      setValidatedSrc(validImageUrl)
    }

    validateImage()
  }, [src, defaultImageUrl])

  if (!validatedSrc) {
    return null // or return a loading indicator
  }

  return (
    <img
      className='w-full h-[200px] course-thumbnail'
      src={validatedSrc}
      alt={alt}
    />
  )
}

export { ValidatedImage }
