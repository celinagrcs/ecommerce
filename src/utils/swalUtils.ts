import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

export const confirmDelete = (onConfirm: () => void) => {

  Swal.fire({
    title: "¿Estás seguro?",
    text: "Este producto se eliminará del carrito.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#E16162",
    cancelButtonColor: "#6c757d",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
      Swal.fire("Eliminado", "El producto ha sido eliminado.", "success");
    }
  });
}
