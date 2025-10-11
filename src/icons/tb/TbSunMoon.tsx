

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSunMoon = (props: IconProps) => {

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
          <Path d="M9.173 14.83a4 4 0 1 1 5.657 -5.657" />
          <Path d="M11.294 12.707l.174 .247a7.5 7.5 0 0 0 8.845 2.492a9 9 0 0 1 -14.671 2.914" />
          <Path d="M3 12h1" />
          <Path d="M12 3v1" />
          <Path d="M5.6 5.6l.7 .7" />
          <Path d="M3 21l18 -18" />
        </G>
      </Svg>
    );
  }

