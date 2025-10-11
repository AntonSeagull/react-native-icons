

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbUvIndex = (props: IconProps) => {

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
          <Path d="M3 12h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 1 1 8 0" />
          <Path d="M12 4v-1" />
          <Path d="M13 16l2 5h1l2 -5" />
          <Path d="M6 16v3a2 2 0 1 0 4 0v-3" />
        </G>
      </Svg>
    );
  }

