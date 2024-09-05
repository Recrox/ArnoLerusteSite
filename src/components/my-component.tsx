import { MyComponentProps } from "../models/props";

const MyComponent: React.FC<MyComponentProps> = ({ title, content }) => {
  // console.log(environment.apiUrl);

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default MyComponent;
