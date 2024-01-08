import Navbar from "../Fragments/Navbar";

const HomeLayout = (props) => {
  const { children } = props;

  return (
    <div className="flex w-full min-h-screen pt-20 pb-4 px-4">
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default HomeLayout;
