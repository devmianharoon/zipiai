const CopyrightFooter = () => {
  return (
    <div className="flex justify-between items-center text-[14px] text-white w-[1408px]">
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
