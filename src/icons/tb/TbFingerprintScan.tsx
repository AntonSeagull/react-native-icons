

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFingerprintScan = (props: IconProps) => {

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
          <Path  d="M9 11a3 3 0 0 1 6 0c0 1.657 .612 3.082 1 4" />
          <Path  d="M12 11v1.75c-.001 1.11 .661 2.206 1 3.25" />
          <Path  d="M9 14.25c.068 .58 .358 1.186 .5 1.75" />
          <Path  d="M4 8v-2a2 2 0 0 1 2 -2h2" />
          <Path  d="M4 16v2a2 2 0 0 0 2 2h2" />
          <Path  d="M16 4h2a2 2 0 0 1 2 2v2" />
          <Path  d="M16 20h2a2 2 0 0 0 2 -2v-2" />
        </G>
      </Svg>
    );
  }

