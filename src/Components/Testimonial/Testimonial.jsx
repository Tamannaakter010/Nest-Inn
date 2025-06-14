import Title from "../Title/Title";
import { testimonials } from "../../assets/assets";

const Testimonial = () => {
  return (
    <div className=" text-center testimonials-container px-4 py-8">
      <Title
        align="left"
        title="Moments That Matter Most"
        subTitle="Stories of exceptional stays and unforgettable hospitality"
      />

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-card bg-white shadow-lg rounded-lg p-6 max-w-sm flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm italic my-2">"{testimonial.review}"</p>
            <p className="text-xs text-gray-500 mb-2">– {testimonial.address}</p>

            <div className="star-rating text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span
                    key={index}
                    className={`text-lg ${testimonial.rating > index ? "text-yellow-400" : "text-gray-300"}`}
                  >
                    ★
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
