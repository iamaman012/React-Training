export const ApiState = (Component) => {
  
  return (props) => {
    // console.log(props.todos,"Hii");
    if (props.error) return <div className="color-danger">{props.error}</div>;
    if (props.isLoading) return <div>Loading</div>;
    // if (!props.todos?.length) return <div>No data</div>;
    return <Component {...props} />;
  };
};
