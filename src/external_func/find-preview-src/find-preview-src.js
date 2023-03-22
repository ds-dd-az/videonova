/**
 * FindPreview function
 *
 * finds id part of youtube link and returns preview source url
 * @param url - string, original url of the video
 * @returns string, source link of the preview image
 */
export default function findPreview(url) {
  let videoId
  if (url.includes("youtu.be")) {
    videoId = [url.split("youtu.be/")[1]]
  } else if (url.includes("embed/")) {
    videoId = [url.split("embed/")[1]]
  } else {
    videoId = [url.split("v=")[1]]
    if (videoId.includes("&")) {
      const ampersandPosition = videoId.indexOf("&")
      videoId = videoId.substring(0, ampersandPosition)
    }
  }
  const source = `https://img.youtube.com/vi/${videoId}/0.jpg`
  return source
}
