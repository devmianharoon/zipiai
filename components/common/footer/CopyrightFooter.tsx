const CopyrightFooter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-[14px] gap-3 md:gap-0 text-white md:w-[1408px] w-full">
      <div className="">
        <div className="copyright-widget text-end"> 
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://asdevtech.com/" target="_blank" rel="noreferrer">
              Hyper G
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="">
        <div className="footer_menu_widget">
          <p>Terms of services | Privacy statement</p>
        </div>
      </div>
      {/* End .col */}

      {/* End .col */}
    </div>
  );
};

export default CopyrightFooter;
