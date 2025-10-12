

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaRandomSolid = (props: IconProps) => {

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
          <Path  d="M 23 3 L 23 7 L 18.40625 7 L 18.125 7.5 L 14.5 13.96875 L 10.59375 7 L 4 7 L 4 9 L 9.40625 9 L 13.34375 16 L 9.40625 23 L 4 23 L 4 25 L 10.59375 25 L 19.59375 9 L 23 9 L 23 13 L 28 8 Z M 16.78125 18 L 15.625 20.0625 L 18.40625 25 L 23 25 L 23 29 L 28 24 L 23 19 L 23 23 L 19.59375 23 Z" />
        </G>
      </Svg>
    );
  }

