import TodoApp from "./good-way/TodoApp";

const SingleResponsability = (): JSX.Element => {
  return (
    <div className="wrapper">
      <div className="wrong-way">
        <TodoApp />
      </div>
    </div>
  );
};

export default SingleResponsability;
