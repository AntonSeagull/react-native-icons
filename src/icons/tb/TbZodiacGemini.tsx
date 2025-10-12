

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbZodiacGemini = (props: IconProps) => {

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
          <Path  d="M3 3a21 21 0 0 0 18 0" />
          <Path  d="M3 21a21 21 0 0 1 18 0" />
          <Path  d="M7 4.5l0 15" />
          <Path  d="M17 4.5l0 15" />
        </G>
      </Svg>
    );
  }

