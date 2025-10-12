

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMicroscope = (props: IconProps) => {

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
          <Path  d="M5 21h14" />
          <Path  d="M6 18h2" />
          <Path  d="M7 18v3" />
          <Path  d="M9 11l3 3l6 -6l-3 -3z" />
          <Path  d="M10.5 12.5l-1.5 1.5" />
          <Path  d="M17 3l3 3" />
          <Path  d="M12 21a6 6 0 0 0 3.715 -10.712" />
        </G>
      </Svg>
    );
  }

