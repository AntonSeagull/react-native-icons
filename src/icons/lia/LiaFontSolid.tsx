

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaFontSolid = (props: IconProps) => {

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
          <Path  d="M 15 6 L 8 26 L 10 26 L 12.09375 20 L 19.90625 20 L 22 26 L 24 26 L 17 6 Z M 16 8.84375 L 19.1875 18 L 12.8125 18 Z" />
        </G>
      </Svg>
    );
  }

