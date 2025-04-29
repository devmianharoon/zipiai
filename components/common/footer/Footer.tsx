import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <footer className="flex justify-center gap-30 container mx-auto px-4 py-4 text-white ">
      <div className="footer_about_widget">
        <h4>About Site</h4>
        <p>
          We&apos;re reimagining how you buy, sell and rent. It&apos; s now
          easier to get into a place you love. So let&apos; s do this, together.
        </p>
      </div>

      {/* End .col */}

      <div className="footer_qlink_widget">
        <h4>Quick Links</h4>
        <ul className="list-unstyled">
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Terms & Conditions</Link>
          </li>
          <li>
            <Link href="/">User&apos; s Guide</Link>
          </li>
          <li>
            <Link href="/">Support Center</Link>
          </li>
          <li>
            <Link href="/">Press Info</Link>
          </li>
        </ul>
      </div>

      {/* End .col */}

      <div className="footer_contact_widget">
        <h4>Contact Us</h4>
        <ul className="list-unstyled">
          <li>
            <a href="mailto:info@findhouse.com">info@findhouse.com</a>
          </li>
          <li>
            <a href="#">Collins Street West, Victoria</a>
          </li>
          <li>
            <a href="#">8007, Australia.</a>
          </li>
          <li>
            <a href="tel:+4733378901">+1 246-345-0699</a>
          </li>
          <li>
            <a href="tel:+4733378901">+1 246-345-0695</a>
          </li>
        </ul>
      </div>

      {/* End .col */}

      <div className="footer_social_widget ">
        <h4>Follow us</h4>
        <ul className="flex gap-x-4 ">
          <Social />
        </ul>
        <h4 className="pt-8">Subscribe</h4>
        <SubscribeForm />
      </div>
    </footer>
  );
};

export default Footer;
