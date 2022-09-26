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
      <main>{children}</main>
    </>
  );
};
export default Layout;


// HENRY 2pm
// When <Layout title='foo'><blahblah /></Layout> is executed,
// does this constructor automatically see <blahblah> as children?
// or do you need to go 
// <Layout title='foo' children = 'bar'><blahblah></Layout>