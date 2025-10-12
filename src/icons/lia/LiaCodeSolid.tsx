

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaCodeSolid = (props: IconProps) => {

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
          <Path  d="M 18 5 L 12 27 L 14 27 L 20 5 Z M 7.9375 6.40625 L 1.1875 15.40625 L 0.75 16 L 1.1875 16.59375 L 7.9375 25.59375 L 9.5625 24.40625 L 3.25 16 L 9.5625 7.59375 Z M 24.0625 6.40625 L 22.4375 7.59375 L 28.75 16 L 22.4375 24.40625 L 24.0625 25.59375 L 30.8125 16.59375 L 31.25 16 L 30.8125 15.40625 Z" />
        </G>
      </Svg>
    );
  }

