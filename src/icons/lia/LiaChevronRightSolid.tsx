

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaChevronRightSolid = (props: IconProps) => {

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
          <Path  d="M 12.25 2.59375 L 11.53125 3.28125 L 7.9375 6.90625 L 7.25 7.59375 L 7.9375 8.3125 L 15.625 16 L 7.9375 23.6875 L 7.25 24.40625 L 7.9375 25.09375 L 11.53125 28.71875 L 12.25 29.40625 L 12.96875 28.71875 L 24.96875 16.71875 L 25.65625 16 L 24.96875 15.28125 L 12.96875 3.28125 Z M 12.25 5.4375 L 22.8125 16 L 12.25 26.5625 L 10.0625 24.375 L 17.75 16.71875 L 18.46875 16 L 17.75 15.28125 L 10.0625 7.625 Z" />
        </G>
      </Svg>
    );
  }

