

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMaximizeOff = (props: IconProps) => {

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
          <Path d="M4 8v-2c0 -.551 .223 -1.05 .584 -1.412" />
          <Path d="M4 16v2a2 2 0 0 0 2 2h2" />
          <Path d="M16 4h2a2 2 0 0 1 2 2v2" />
          <Path d="M16 20h2c.545 0 1.04 -.218 1.4 -.572" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

