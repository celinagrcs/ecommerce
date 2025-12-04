import { Link } from "react-router-dom";
import { Order } from "../types/order";
import { Helmet } from "react-helmet-async";

const OrderHistoryPage: React.FC = () => {
  const orders: Order[] = JSON.parse(localStorage.getItem("orders")  || "[]");

	if (orders.length === 0) {
		return(
			<section className="p-10 text-center h-[50vh]">
         <h1 className="font-extrabold text-2xl md:text-4xl py-10 text-center font-title text-[#2a2a2a]">Historial de Compras</h1>
				<p className="text-gray-500 mb-4">No tenés compras todavía.</p>
	      <Link to="/" className="bg-[#ff8e3c] text-black px-4 py-2 rounded hover:bg-[#d37533]">Ir a la tienda</Link>
			</section>
		);
	}

return (
  <>
    <Helmet>
      <title>Historial de Pedidos</title>
      <meta name="description" content="Aún no tienes pedidos registrados. Explora nuestra tienda para empezar a comprar." />
    </Helmet>
    <article className="max-w-3xl mx-auto p-10 h-auto">
      <h1 className="font-extrabold text-2xl md:text-4xl py-10 text-center font-title text-[#2a2a2a]">Historial de Compras</h1>
      <section className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} 
          className="p-4 bg-white shadow rounded-lg border"
          role="group" 
          aria-labelledby={`order-id-${order.id}`}
          >
          <h2 id={`order-id-${order.id}`} className="sr-only">
            Detalles de la Orden {order.id}
          </h2>
            <div className="flex justify-between">
            <p className="font-semibold">Orden: {order.id}</p>
            <p className="text-gray-600">
              {new Date(order.date).toLocaleString()}
            </p>
            </div>

            <ul className="mt-3 space-y-2">
              {order.items.map((item) => (
                <li key={item.id} className="flex gap-4 items-center">
                  <img src={item.image} alt={item.title}  className="w-12 h-16 object-cover rounded" loading="lazy" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-600">
                      Cantidad: {item.quantity}
                    </p>
                    <p className="text-sm font-semibold">{item.price}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-3 font-bold text-right text-[#4d9750]">
              Total: ${order.total.toLocaleString("es-CL")}
            </p>
          </div>
        ))}
      </section>
    </article>
  </>
)
}

export default OrderHistoryPage;