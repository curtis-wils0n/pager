const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>{`Copyright © Pager ${year}`}</footer>;
};

export default Footer;