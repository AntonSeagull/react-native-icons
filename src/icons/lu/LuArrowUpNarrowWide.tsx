

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuArrowUpNarrowWide = (props: IconProps) => {

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
          <Path  d="m3 8 4-4 4 4" />
          <Path  d="M7 4v16" />
          <Path  d="M11 12h4" />
          <Path  d="M11 16h7" />
          <Path  d="M11 20h10" />
        </G>
      </Svg>
    );
  }

