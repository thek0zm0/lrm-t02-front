import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#ecebeb"
    foregroundColor="#d6d2d2"
  >
    <rect x="24" y="16" rx="0" ry="0" width="107" height="97" />
  </ContentLoader>
)

export default MyLoader

