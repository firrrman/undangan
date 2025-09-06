import { MdLocationOn } from 'react-icons/md';

const MapSection = () => {
  return (
    <section className="section" id="lokasi">
      <div className="container mx-auto flex flex-col">
        <h2
          className="sm:text-6xl text-5xl font-secondary font-bold text-center text-zinc-800 leading-tight mb-4"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          Peta Lokasi
        </h2>
        <p
          className="text-zinc-600 text-center sm:text-[18px] max-w-[750px] mx-auto"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          Anda dapat menuju lokasi acara kami dengan bantuan peta dibawah ini
          atau anda bisa buka di
        </p>
        <div
          className="flex justify-center mt-4"
          data-aos="fade-down"
          data-aos-delay="1000"
        >
          <a
            className="btn btn-primary"
            href="https://maps.app.goo.gl/hyLsxuqgsx6QCut38"
            target="_blank"
            rel="noreferrer noopener"
          >
            <MdLocationOn className="text-white" />
            <span className="ml-2">Google Map</span>
          </a>
        </div>
        <iframe
          title="map"
          className="w-full h-[500px] mt-12"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3963.4033095637765!2d106.6738889!3d-6.5966944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzUnNDguMSJTIDEwNsKwNDAnMjYuMCJF!5e0!3m2!1sid!2sid!4v1757183997371!5m2!1sid!2sid"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
