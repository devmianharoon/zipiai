const Social = () => {
  const socialContent = [
    {
      id: 1,
      liveLink: "https://www.linkedin.com/",
      icon: "fa-brands fa-linkedin-in",
    },
    {
      id: 2,
      liveLink: "https://www.facebook.com/",
      icon: "fa-brands fa-facebook-f",
    },
    {
      id: 3,
      liveLink: "https://www.instagram.com/",
      icon: "fa-brands fa-instagram",
    },
    {
      id: 4,
      liveLink: "https://www.youtube.com/",
      icon: "fa-brands fa-youtube",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <li className="list-inline-item " key={item.id}>
          <a
            href={item.liveLink}
            target="_blank"
            rel="noopener noreferrer "
            className="flex justify-center items-center rounded-[50%] h-[56px] w-[56px] box-border bg-white">
            <i className={`${item.icon} bg-white `}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
