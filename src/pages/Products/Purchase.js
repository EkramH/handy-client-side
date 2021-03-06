import { useParams } from "react-router-dom";
import Footer from "../../shared/Footer";
import PurchaseForm from "./PurchaseForm";
import { useQuery } from "react-query"
import Loading from "../../shared/Loading"

const Purchase = () => {
  const { productsId } = useParams();

  const {data: purchase, isLoading, refetch } = useQuery('purchase', ()=> fetch(`https://boiling-garden-19713.herokuapp.com/product/${productsId}`)
            .then((res) => res.json()))

            if(isLoading){
              return <Loading/>
            }

  return (
    <div>
      <div className="hero bg-base-100">
        <div className="hero-content text-center">
          <div className="lg:max-w-lg">
            <h2 className="text-5xl font-bold">{purchase.name}</h2>
            <img className="mx-auto my-6" src={purchase.img} alt="" />
            <p className="py-3 text-base">{purchase.details}</p>
            <p className="text-3xl text-primary pb-2">
              Price: {purchase.price}$
            </p>
            <div className="flex justify-evenly mb-5 font-semibold">
              <p>Quantity: {purchase.quantity}</p>
              <p>Minimum Order: {purchase.minOrder}</p>
            </div>
            <PurchaseForm purchase={purchase} productsId={productsId} refetch={refetch} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Purchase;
