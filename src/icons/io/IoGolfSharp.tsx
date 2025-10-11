

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoGolfSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M240,16V191.66c0,.23,0,.47,0,.7V320.47q8-.47,16-.47t16,.47V202.3L448,112Z" />
          <Path  d="M462.91,457.5c-8.54-42.85-35-78.74-76.62-103.8C353.86,334.15,313.76,322.4,272,320v95.79H240V320c-41.79,2.4-81.89,14.15-114.32,33.7-41.59,25.06-68.08,60.95-76.62,103.8-2,9.81-.68,38.5-.68,38.5H463.59S464.87,467.31,462.91,457.5Z" />
        </G>
      </Svg>
    );
  }

