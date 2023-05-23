
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[550px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/car-crash-accident-traffic-road-insurance-claim-concept_39768-8268.jpg?size=626&ext=jpg&uid=R101438997&ga=GA1.2.228412914.1672594624&semt=ais" className="w-full rounded-xl" />
     <div className="absolute rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
     <div className='text-orange-300 space-y-7  pl-12 w-1/2'>
                    <h2 className='lg:text-5xl md:text-3xl font-bold text-center'>THE UNLIMITED TOY STORE</h2>
                    <h3 className="text-center lg:text-4xl font-bold ">PICK THE BEST TOY FOR YOUR KID</h3>
                    <button className="btn btn-outline btn-secondary">Details</button>
                </div>
     </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/toy-red-car-with-pinecone-top_1252-14.jpg?size=626&ext=jpg&uid=R101438997&ga=GA1.2.228412914.1672594624&semt=ais" className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
     <div className='text-orange-300 space-y-7  pl-12 w-1/2'>
                    <h2 className='lg:text-5xl md:text-3xl font-bold text-center'>THE UNLIMITED TOY STORE</h2>
                    <h3 className="text-center lg:text-4xl font-bold ">PICK THE BEST TOY FOR YOUR KID</h3>
                    <button className="btn btn-outline btn-secondary">Details</button>
                </div>
     </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/car-crash-accident-traffic-road-insurance-claim-concept_39768-8180.jpg?w=826" className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
     <div className='text-orange-300 space-y-7  pl-12 w-1/2'>
                    <h2 className='lg:text-5xl md:text-3xl font-bold text-center'>THE UNLIMITED TOY STORE</h2>
                    <h3 className="text-center lg:text-4xl font-bold ">PICK THE BEST TOY FOR YOUR KID</h3>
                    <button className="btn btn-outline btn-secondary">Details</button>
                </div>
     </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>
        </div>
    );
};

export default Banner;