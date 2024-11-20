import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const BrandsDetails = () => {
  const singleData = useLoaderData();

  const handleCopy = (copied) => {
    toast.success(`code ${copied} copied successfully!`, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const { brand_logo, brand_name, rating, shop_Link, coupons } = singleData;
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <img
          src={brand_logo}
          alt="Brand Logo"
          className="w-24 h-24 mx-auto rounded-full shadow-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{brand_name}</h1>
        <div className="text-yellow-500 text-lg mt-2">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>{" "}
        <span> ({rating})</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-96 ml-40 ">
        {coupons.map((coupon, idx) => (
          <div
            key={idx}
            className="card bg-base-100 w-[550px]  shadow-xl border-2 mt-9"
          >
            <div className="card-body">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {coupon.coupon_code}
              </h3>
              <CopyToClipboard
                text={coupon.coupon_code}
                onCopy={() => handleCopy(coupon.coupon_code)}
              >
                <div>
                  <button className="btn btn-success text-white font-bold text-xl mb-4">
                    Copy Code
                  </button>
                </div>
              </CopyToClipboard>
              <h2 className="card-title font-bold">{coupon.condition}</h2>
              <p>{coupon.description}</p>
              <p>Expires: {coupon.expiry_date}</p>
              <div className="card-actions justify-start">
                <a
                  target="_blank"
                  href={shop_Link}
                  className="btn btn-neutral font-bold text-xl text-white"
                >
                  Use Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsDetails;
