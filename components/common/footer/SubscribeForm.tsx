"use client";

const SubscribeForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="footer_mailchimp_form" onClick={handleSubmit}>
      <div className="flex items-center">
        <div className="col-auto">
          <input
            type="email"
            className="form-control mb-2 bg-finputbg py-1 text-[16px] pl-6 rounded-[30px] outline-none"
            id="inlineFormInput"
            placeholder="Your email"
          />
        </div>

        <div className="col-auto ms-2">
          <button
            type="submit"
            className="btn btn-primary mb-2 bg-finputbg h-12 w-12 rounded-full ">
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SubscribeForm;
