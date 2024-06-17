import customer1Image from "./customer1.jpg";
import customer2Image from "./customer2.jpg";
import customer3Image from "./customer3.jpg";
import customer4Image from "./customer4.jpg";
import "./TestimonialCard.css";
import TestimonialCard from "./TestimonialCard";

const customer = [
    {
        fullName: "Cheryl Taylor",
        image: customer1Image,
        rating: [1,1,1,1,1],
        says:  `Great atmosphere with great food.`,
    },

    {
        fullName: "Josh Williams",
        image: customer2Image,
        rating: [1,1,1,1,0.5],
        says:  `The Greek Salad was delightful and refreshful.`,
    },

    {
        fullName: "Daniel Bishop",
        image: customer3Image,
        rating: [1,1,1,1,1],
        says:  `The bruschetta bread is perfectly crisp with the freshest tomatoes`,
    },

    {
    fullName: "Tiffani Thompson",
    image: customer4Image,
    rating: [1,1,1,1,1],
    says:  `The lemon dessert was the perfect ending to a perfect meal`,
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <h2>What people say about us!</h2>
                {customer.map((customer, index) =>
                <TestimonialCard key={index} customer={customer} />
                )}
            </div>
        </section>
    );
};

export default Testimonials;