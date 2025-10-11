

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWindowOff = (props: IconProps) => {

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
          <Path d="M6.166 6.19a6.903 6.903 0 0 0 -1.166 3.81v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-1m0 -4v-5c0 -3.728 -3.134 -7 -7 -7a6.86 6.86 0 0 0 -3.804 1.158" />
          <Path d="M5 13h8m4 0h2" />
          <Path d="M12 3v5m0 4v9" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

