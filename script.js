const height = Number(prompt("Введіть висоту ялинки:"));

switch (height) {
  case 0:
    alert("Довжина повинна бути представлена позитивним числом.");
    break;
  case 1:
    alert("Довжина занадто маленька.");
    break;
  default:
    alert("Привіт! Починаємо побудову ялинки:");
    for (let i = 0; i < height; i++) {
      const spaces = " ".repeat(height - i);
      const stars = "*".repeat(2 * i + 1);
      console.log(spaces + stars);
    }
}
