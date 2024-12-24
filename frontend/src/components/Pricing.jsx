import { Check } from 'lucide-react';;
import { Link } from 'react-router-dom';
const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY PLAN",
      price: "20000",
      length: 3, // MONTHS
    },
    {
      imgUrl: "/pricing.jpg",
      title: " 1/2 YEARLY PLAN",
      price: "35000",
      length: 6, // MONTHS
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY PLAN",
      price: "70000",
      length: 12, // MONTHS
    },
  ];

  return (
    <section className='pricing'>
      <h1>BEST FITNESS PLAN FOR YOU</h1>
      <div className='wrapper'>
        {pricing.map((element, index) => (
          <div className='card' key={index}>
            <img src={element.imgUrl} alt='pricing image' />
            <div className='title'>
              <h1>{element.title}</h1>
              <h2>PACKAGES</h2>
              <h3>Rs {element.price}</h3>
              <p>Duration: {element.length} months</p>
            </div>
            <div className='description'>
              <p><Check/>Total Equipment</p>
              <p><Check/>Free RestRoom</p>
              <p><Check/>Total Support 24 H</p>
              <p><Check/>7/24 Skill Support</p>
              <p><Check/>Free Demo Available</p>
              <Link to="/">Join Now</Link>           
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
