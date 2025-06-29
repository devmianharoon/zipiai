import Link from "next/link";
import Social from "./Social";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="w-[1408px] ">
      <div className="w-full flex justify-between items-center py-4 border-b border-[var(--color-silver)]">
        <Image
          src={"/assets/images/hyperg1.png"}
          alt={"image"}
          height={57}
          width={160}
        />
        <ul className="flex gap-x-4 ">
          <Social />
        </ul>
      </div>

      <div className="sec flex flex-col justify-center md:flex-row  md:justify-between  md:py-6">
        <div className="footer_qlink_widget leading-[2.6] text-[14px] ">
          <h5 className=" text-[var(--color-blue)]">Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <Link href="/">Home </Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Request a demo</Link>
            </li>
            <li>
              <Link href="/">Solutions</Link>
            </li>
            <li>
              <Link href="/">Products</Link>
            </li>
            <li>
              <Link href="/">Support</Link>
            </li>
            <li>
              <Link href="/">Contact us</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
          </ul>
        </div>

        <div className="sec footer_qlink_widget leading-[2.6] text-[14px] col-span-2">
          <h5 className="text-[var(--color-blue)]">Products</h5>
          <ul className="list-unstyled">
            <li>
              <Link href="/">Cable internet</Link>
            </li>
            <li>
              <Link href="/">Satellite internet</Link>
            </li>
            <li>
              <Link href="/">Fiber optics</Link>
            </li>
          </ul>
          <h5 className=" text-[var(--color-blue)] pt-4">Solutions</h5>
          <ul className="list-unstyled">
            <li>
              <Link href="/">Personal internet</Link>
            </li>
            <li>
              <Link href="/">Commercial internet</Link>
            </li>
          </ul>
        </div>

        <div className="sec footer_qlink_widget leading-[2.6] text-[14px] col-span-2">
          <h5 className=" text-[var(--color-blue)]">Resources</h5>
          <ul className="list-unstyled">
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">User guide</Link>
            </li>
            <li>
              <Link href="/">Support</Link>
            </li>
            <li>
              <Link href="/">Press info</Link>
            </li>
          </ul>
        </div>

        {/* End .col */}

        <div className="sec footer_contact_widget leading-[2.6] text-[14px] col-span-2">
          <h5 className=" text-[var(--color-blue)]">Contact</h5>
          <ul className="list-unstyled">
            <li>
              <a href="tel:+4733378901" className="flex items-center">
                <Image
                  className="text-[var(--color-blue)] mr-2"
                  height={24}
                  width={24}
                  src={"/assets/phone.png"}
                  alt={"phone"}
                />
                <span> +1 246-345-0699</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+4733378901"
                className="flex justify-start items-center">
                <Image
                  className="text-[var(--color-blue)] mr-2"
                  height={24}
                  width={24}
                  src={"/assets/phone.png"}
                  alt={"phone"}
                />
                <span> +1 246-345-0695</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:info@findhouse.com"
                className="flex justify-start items-center">
                <Image
                  className="text-[var(--color-blue)] mr-2"
                  height={24}
                  width={24}
                  src={"/assets/mail.png"}
                  alt={"phone"}
                />
                <span>info@findhouse.com</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-start items-center">
                {" "}
                <Image
                  className="text-[var(--color-blue)] mr-2"
                  height={24}
                  width={24}
                  src={"/assets/location.png"}
                  alt={"phone"}
                />{" "}
                <span>Collins Street West, Victoria</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sec footer_social_widget leading-[2.6] text-[14px] w-[444px]">
          <h5 className=" text-[var(--color-blue)]">Sign up Newsletter</h5>

          <ul>
            <li>
              <p className="">
                Subscribe to our newsletter for the latest broadband deals,
                tips, and exclusive updates.
              </p>
            </li>
            <li className="py-6 relative ">
              <input
                type="email"
                placeholder="Enter email adress"
                className="w-full rounded-[32px] h-[60px] box-border placeholder:text-[var(--color-silver)] border border-[var(--color-silver)] px-6 outline-0"
              />
              <button className="absolute right-2 bg-[var(--color-blue)] h-[44px] w-[44px] text-[var(--color-white)] rounded-[50%] top-[18px] cursor-pointer flex justify-center items-center ">
                <FontAwesomeIcon icon={faChevronRight} height={24} width={24} />
              </button>
            </li>
          </ul>
          {/* <SubscribeForm /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
