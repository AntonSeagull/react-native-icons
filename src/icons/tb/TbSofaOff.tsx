

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSofaOff = (props: IconProps) => {

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
          <Path d="M18 14v-1a2 2 0 1 1 4 0v5m-3 1h-16a1 1 0 0 1 -1 -1v-5a2 2 0 1 1 4 0v1h8" />
          <Path d="M4 11v-3c0 -1.082 .573 -2.03 1.432 -2.558m3.568 -.442h8a3 3 0 0 1 3 3v3" />
          <Path d="M12 5v3m0 4v2" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

