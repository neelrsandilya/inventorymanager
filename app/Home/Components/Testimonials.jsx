import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const testimonials = [
  {
    name: "Walter White",
    quote: "In chemistry, precision and timing are everything. ProdManager’s inventory alerts ensure I never run out of critical materials, allowing my experiments to proceed flawlessly.",
    image: "https://coolmenshair.com/wp-content/uploads/Walter-White-mustache-goatee.jpg",
    title: "Walter White, Lead Chemist,",
  },
  { 
    name: "Rajesh Gupta",
    quote: "I run a small electronics shop, and ProdManager saved me hours each week. The sales report and inventory analytics are clear and super helpful. I finally feel in control of my stock.",
    image: "https://famecop.com/storage/2023/03/Asmongold.png",
    title: "Rajesh Gupta, Electronics shopkeeper",
  },
  {
    name: "Ryan Gosling",
    quote: "Running a garage means dealing with hundreds of small parts—nuts, bolts, sensors—you name it. Before ProdManager, it was chaos. Now I get low stock alerts, total inventory counts, and sales tracking, all in one place. It’s like having a shop assistant who never sleeps.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_sjBZPOPtnE1-K90OT05gWH50uOkDYWa9rA&s",
    title: "Owner, Local Garage",
  },
  {
    name: "Linus Sebastian",
    quote: "With so many products—RAMs, SSDs, GPUs—keeping track used to be a mess. ProdManager changed the game. Now I know exactly what’s in stock, what’s running low, and what’s selling fast. It’s like having a personal assistant for my shop.",
    image: "https://i.ytimg.com/vi/U1cXInJRdM4/maxresdefault.jpg",
    title: "Youtuber",
  },
  {
    name: "Elon musk",
    quote: "Time is the most valuable asset I have—and I don’t waste it chasing inventory reports. ProdManager gives me real-time insights, streamlined control, and data-driven decisions at scale. Whether it's ten products or ten thousand, it performs flawlessly.",
    image: "https://th.bing.com/th/id/OIP._93mWY6QyiY46OxjKYKC_wHaFj?rs=1&pid=ImgDetMain",
    title: "Rocket Scientist",
  },
];

function TestimonialCard({ name, title, image, quote }) {
  return (
    <div className="w-72 h-72 bg-white rounded-2xl shadow-lg pt-7 px-4 relative flex flex-col items-center text-center">
      <div className="  ">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full border-4 border-white shadow-md"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-indigo-500">{name}</h3>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="mt-3 text-sm italic text-gray-700">"{quote}"</p>
      </div>
    </div>
  );
}

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    arrows: false,
  };

  return (
    <section className="bg-gray-100 py-12  px-4 ml-20">
      <div className="max-w-lg  mx-auto">
        <Slider {...settings}>
          {testimonials.map((c, idx) => (
            <div key={idx} className="flex justify-center">
              <TestimonialCard {...c} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
