
// Peguei do cb viagens, falta adaptar
const animDuration: number = 1000; //ms

function playErrorAnim(el: HTMLInputElement) {
  try {
    el.classList.add("error_input");
    el?.focus();

    setTimeout(() => {
      el.classList.remove("error_input");
    }, animDuration);
  } catch (error) {
    console.error("Error occurred while manipulating the class:", error);
  }
}

export function checkUsername(
  el: HTMLInputElement | null,
  setMessage: (value: string) => void
): boolean {
  // In case ref.current is not available
  if (!el) {
    setMessage("Falha ao acessar input")
    return false
  }

  const value: string | null = el.value;
  let ok: boolean = false;

  if (!value) {
    setMessage("Username vazio");
  } else if (value.length < 4) {
    setMessage("Username deve ter ao menos 4 caracteres");
  } else if (value.length > 15) {
    setMessage("Username deve ter no máximo 15 caracteres");
  } else {
    ok = true;
  }

  if (!ok) {
    playErrorAnim(el)
  } else {
    setMessage("Username inserido com sucesso")
  }

  return ok;
}
