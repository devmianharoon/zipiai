import Link from "next/link";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="grid grid-cols-12 gap-16 container mx-auto px-4 py-4 text-white text-[14px] ">
      <div className="footer_about_widget leading-[2.6] col-span-5">
        <h4 className="font-bold text-[18px] mb-6">About Site</h4>
        <p className="leading-[2]">
          We&apos;re reimagining how you buy, sell and rent. It&apos; s now
          easier to get into a place you love. So let&apos; s do this, together.
        </p>
      </div>

      {/* End .col */}

      <div className="footer_qlink_widget leading-[2.6] text-[14px] col-span-2">
        <h4 className="text-[18px] font-bold">Quick Links</h4>
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

      <div className="footer_contact_widget leading-[2.6] text-[14px] col-span-2">
        <h4 className="text-[18px] font-bold">Contact Us</h4>
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

      <div className="footer_social_widget leading-[2.6] text-[14px] col-span-3">
        <h4 className="text-[18px] font-bold">Follow us</h4>
        <ul className="flex gap-x-4 text-primary">
          <Social />
        </ul>

        {/* <SubscribeForm /> */}
      </div>
    </footer>
  );
};

export default Footer;
