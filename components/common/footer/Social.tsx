const Social = () => {
  const socialContent = [
    { id: 1, liveLink: "https://www.facebook.com/", icon: "fab fa-facebook" },
    { id: 2, liveLink: "https://www.twitter.com/", icon: "fab fa-twitter" },
    { id: 3, liveLink: "https://www.instagram.com/", icon: "fab fa-instagram" },
    { id: 4, liveLink: "https://www.pinterest.com/", icon: "fab fa-pinterest" },
    { id: 5, liveLink: "https://www.dribbble.com/", icon: "fab fa-dribbble" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
            <i className={`${item.icon}`}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
