const Footer = () => {
  return (
    <div className="bg-blue-800 py-16">
      <div className="container flex justify-between">
        <div>
          <h1 className="text-white text-5xl font-bold tracking-tighter">
            Booking.com
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white font-bold">Privacy Policy</span>
          <span className="text-white font-bold">Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
