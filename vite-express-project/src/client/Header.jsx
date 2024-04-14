import logo from "./assets/logo.svg";

const Header = () => {
  return (
    <div className='flex items-center flex-col justify-end h-1/3 gap-10'>
      <img src={logo} alt='' width={250}/>
      <div className='italic'>we diagnose skin conditions using AI</div>
    </div>
  );
};

export default Header;
