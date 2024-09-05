import { environment } from '../environment/environment';
import { Props } from '../models/props';

const MyComponent: React.FC<Props> = ({ title, content }) => {
  // console.log(environment.apiUrl);

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default MyComponent;
