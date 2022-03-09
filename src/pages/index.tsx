import Button from '../components/Button';
import UnsplashImage from '../components/UnsplashImage';

const Homepage = () => (
  <main className="max-w-5xl m-auto py-8">
    <section className="grid grid-cols-2 grid-rows-1 px-8">
      <section className="mt-24">
        <h1 className="text-6xl font-bold leading-[96px]">
          Empowering your digital reality
        </h1>
        <p className="mt-8 text-gray mr-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas
          culpa neque? Laborum, repellendus voluptatum?
        </p>
        <div className="mt-8 relative mr-8">
          <input
            type="text"
            placeholder="Your email address"
            className="absolute shadow-gray/25 shadow-md placeholder:text-gray placeholder:italic text-xs py-4 w-full pl-2 pr-8"
            name="email"
          />
          <Button className="absolute right-2 top-1">
            Request Consultation
          </Button>
        </div>
      </section>
      <UnsplashImage
        src="1573496359142-b8d87734a5a2"
        width={667}
        height={1001}
        className="rounded-[1000000px] shadow-lg shadow-blue"
      />
    </section>
  </main>
);

export default Homepage;
