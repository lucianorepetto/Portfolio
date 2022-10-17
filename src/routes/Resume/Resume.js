import React, {useEffect} from 'react'

function Resume() {
  useEffect(() => {
    document.title = "Luciano Repetto | Resume"
  }, [])

  return (  
    <div>Resume</div>
  )
}

export default Resume