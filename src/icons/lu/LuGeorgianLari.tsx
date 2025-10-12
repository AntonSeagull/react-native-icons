

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGeorgianLari = (props: IconProps) => {

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
          <Path  d="M11.5 21a7.5 7.5 0 1 1 7.35-9" />
          <Path  d="M13 12V3" />
          <Path  d="M4 21h16" />
          <Path  d="M9 12V3" />
        </G>
      </Svg>
    );
  }

