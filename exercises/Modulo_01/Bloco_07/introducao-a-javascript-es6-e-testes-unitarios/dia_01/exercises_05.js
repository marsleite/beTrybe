const btnClick = document.getElementById('btn');
const res = document.getElementById('count');

btnClick.addEventListener('click', () => {
  let num = Number(res.textContent) + 1;
  res.textContent = num;
});