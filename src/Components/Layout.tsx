const Layout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <h1>{title}</h1>
      <main>{children}</main>;
    </>
  );
};
export default Layout;
