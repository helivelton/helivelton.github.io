
const updateCount = (response) => {
  console.log(response);
  document.getElementById('visits').innerText = response.value;
}
