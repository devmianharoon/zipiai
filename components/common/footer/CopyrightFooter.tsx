const CopyrightFooter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-[14px] gap-3 md:gap-0 text-white md:w-[1408px] w-full md:border-t md:border-[var(--color-silver)] py-4">
      <div className=" ">
        <div className="copyright-widget text-end"> 
          <p className="md:text-[18px] text-[14px] font-[400] md:leading-[30px] leading-[22px]">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://asdevtech.com/" target="_blank" rel="noreferrer">
              Hyper G
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="">
        <div className="footer_menu_widget ">
          <p className="md:text-[18px] text-[14px] font-[400] md:leading-[30px] leading-[22px]">Terms of services | Privacy statement</p>
        </div>
      </div>
      {/* End .col */}

      {/* End .col */}
    </div>
  );
};

export default CopyrightFooter;
