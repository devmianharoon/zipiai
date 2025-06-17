import Image from "next/image";

const Social = () => {
  const socialContent = [
    {
      id: 1,
      liveLink: "https://www.linkedin.com/",
      icon: "/linkd-logo.svg",
    },
    {
      id: 2,
      liveLink: "https://www.facebook.com/",
      icon: "/fb-logo.svg",
    },
    {
      id: 3,
      liveLink: "https://www.instagram.com/",
      icon: "/insta-logo.svg",
    },
    {
      id: 4,
      liveLink: "https://www.youtube.com/",
      icon: "/you-logo.svg",
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
            className="flex justify-center items-center rounded-[50%] h-[56px] w-[56px] box-border bg-white  ">
            <Image className={`  bg-white `}alt="social Icon "src={`${item.icon}`} width={18} height={18} />
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
