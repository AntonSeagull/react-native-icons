

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineConnectedTv = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M20,3H4C2.9,3,2,3.9,2,5v12c0,1.1,0.9,2,2,2h4v2h8v-2h4c1.1,0,1.99-0.9,1.99-2L22,5C22,3.9,21.1,3,20,3z M20,17H4V5h16V17 z M5,14v2h2C7,14.89,6.11,14,5,14z M5,11v1.43c1.97,0,3.57,1.6,3.57,3.57H10C10,13.24,7.76,11,5,11z M5,8v1.45 c3.61,0,6.55,2.93,6.55,6.55H13C13,11.58,9.41,8,5,8z" />
        </G>
      </Svg>
    );
  }

