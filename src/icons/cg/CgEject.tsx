

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgEject = (props: IconProps) => {

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
          <Path  d="M16.9498 14.3948L18.364 12.9805L12 6.61658L5.63605 12.9805L7.05026 14.3948L12 9.445L16.9498 14.3948Z" fill="currentColor" />
          <Path  d="M6.00014 17.3835H18.0001V15.3835H6.00014V17.3835Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

