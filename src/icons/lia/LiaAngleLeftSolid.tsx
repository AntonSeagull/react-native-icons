

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaAngleLeftSolid = (props: IconProps) => {

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
          <Path  d="M 19.03125 4.28125 L 8.03125 15.28125 L 7.34375 16 L 8.03125 16.71875 L 19.03125 27.71875 L 20.46875 26.28125 L 10.1875 16 L 20.46875 5.71875 Z" />
        </G>
      </Svg>
    );
  }

