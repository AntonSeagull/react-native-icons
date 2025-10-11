

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdPinEnd = (props: IconProps) => {

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
          <Path  d="M20,12V6H4v12h10l0,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v6H20z M19,14c-1.66,0-3,1.34-3,3s1.34,3,3,3 c1.66,0,3-1.34,3-3S20.66,14,19,14z M14.66,8H9v5.66l2.12-2.12l2.83,2.83l1.41-1.41l-2.83-2.83L14.66,8z" />
        </G>
      </Svg>
    );
  }

