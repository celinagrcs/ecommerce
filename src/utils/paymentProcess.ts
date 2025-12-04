

export const simulatePayment = async ()=> {

  const { default: Swal } = await import('sweetalert2')

  Swal.fire({
    title: "Procesando pago...",
    text: "Por favor espera.",
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    },
  })

  await new Promise((resolve) => setTimeout(resolve, 2500));

  const trackingCode = generateTrackingCode();

  await Swal.fire ({
    icon: "success",
    title: "¡Pago realizado con éxito! 🎉",
    html: `
      <p class="mt-2">Tu número de seguimiento es:</p>
      <p style="font-size: 1.3rem; font-weight: bold; color: #ff8e3c;">
        ${trackingCode}
      </p>
    `,
    confirmButtonText: "Ver historial de compras",
    confirmButtonColor: "#ff8e3c",
  });

  return trackingCode;
}

function generateTrackingCode() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const prefix = 
    letters[Math.floor(Math.random() * letters.length)] +
    letters[Math.floor(Math.random() * letters.length)] +
    letters[Math.floor(Math.random() * letters.length)];

    const numbers = Math.floor(100000 + Math.random() * 900000); 

    return `${prefix}-${numbers}`;
}