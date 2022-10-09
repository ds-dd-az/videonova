export default async function getVideos() {
  const response = await fetch(
    "https://wonderful-app-lmk4d.cloud.serverless.com/video"
  )
  return response.json()
}
