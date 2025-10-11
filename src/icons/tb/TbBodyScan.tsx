

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBodyScan = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
          <Path d="M4 16v2a2 2 0 0 0 2 2h2" />
          <Path d="M16 4h2a2 2 0 0 1 2 2v2" />
          <Path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
          <Path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M10 17v-1a2 2 0 1 1 4 0v1" />
          <Path d="M8 10c.666 .666 1.334 1 2 1h4c.666 0 1.334 -.334 2 -1" />
          <Path d="M12 11v3" />
        </G>
      </Svg>
    );
  }

