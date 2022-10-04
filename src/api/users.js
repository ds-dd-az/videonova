export default function getUserData() {
  fetch("https://wonderful-app-lmk4d.cloud.serverless.com/user")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
}
