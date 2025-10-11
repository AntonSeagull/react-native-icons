

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaArrowUpSolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M 16 4.09375 L 15.28125 4.78125 L 6.78125 13.28125 L 8.21875 14.71875 L 15 7.9375 L 15 28 L 17 28 L 17 7.9375 L 23.78125 14.71875 L 25.21875 13.28125 L 16.71875 4.78125 Z" />
        </G>
      </Svg>
    );
  }

