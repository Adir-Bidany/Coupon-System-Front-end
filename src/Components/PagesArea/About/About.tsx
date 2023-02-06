import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About center">
            <h1>Coupon system</h1>
            <p>
                Coupon system it is a website that allows registered customers
                to purchased coupons from different companies.
                The coupons offers special prices that you cannot get in a
                regular store.
            </p>
            <p>
                Companies all around the world can be a coupon supplier in this
                website.
                Once they register as an official company supplier,
                they have the right to upload as many coupons they want,
                subject to provide better prices for the website customers.
            </p>
        </div>
    );
}

export default About;
