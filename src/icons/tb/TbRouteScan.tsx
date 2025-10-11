

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRouteScan = (props: IconProps) => {

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
          <Path  d="M7 12v-3h3" />
          <Path  d="M14 9h3v3" />
          <Path  d="M7 9l4.414 4.414a2 2 0 0 1 .586 1.414v2.172" />
          <Path  d="M17 9l-4.414 4.414a2 2 0 0 0 -.586 1.414v2.172" />
        </G>
      </Svg>
    );
  }

