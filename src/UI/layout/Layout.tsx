
const Layout = ({ children }: any): JSX.Element => {

    return (
      <div
        style={{
          padding: "none",
        }}
      >
        layout
        {children}
      </div>
    );
  };
  
  export { Layout };