import Button from '../Button';

const Header = () => (
  <header className="flex place-items-center mt-8 justify-between w-full m-auto max-w-5xl font-title text-slate">
    <span className="font-extrabold text-3xl">GDSCTech</span>
    <div className="flex gap-8 place-items-center">
      <nav className="text-gray">
        <ul className="flex gap-8 place-items-center">
          <li className="text-blue">Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Team</li>
        </ul>
      </nav>
      <Button>Get Started</Button>
    </div>
  </header>
);

export default Header;
