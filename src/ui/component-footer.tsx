const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <p className="text-gray-300 text-center opacity-40 mt-12">
      © Felix Anderson {currentYear}
    </p>
  );
};


export default Footer;