

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbScanEye = (props: IconProps) => {

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
          <Path  d="M4 8v-2a2 2 0 0 1 2 -2h2" />
          <Path  d="M4 16v2a2 2 0 0 0 2 2h2" />
          <Path  d="M16 4h2a2 2 0 0 1 2 2v2" />
          <Path  d="M16 20h2a2 2 0 0 0 2 -2v-2" />
          <Path  d="M7 12c3.333 -4.667 6.667 -4.667 10 0" />
          <Path  d="M7 12c3.333 4.667 6.667 4.667 10 0" />
          <Path  d="M12 12h-.01" />
        </G>
      </Svg>
    );
  }

