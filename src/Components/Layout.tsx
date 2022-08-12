const Layout = ({
  children,
  title,
}: { // is this part, in brackets, an object?
  children: React.ReactNode;
  title: string;
}) => {
  return ( // and is this part in parens an element?
    <>
      <h1>{title}</h1>
      <main>{children}</main>;
    </>
  );
};
export default Layout;
