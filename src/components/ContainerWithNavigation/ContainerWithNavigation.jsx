import Navigation from "src/components/Navigation/Navigation";

const ContainerWithNavigation = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default ContainerWithNavigation;
