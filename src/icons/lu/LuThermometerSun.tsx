

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuThermometerSun = (props: IconProps) => {

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
          <Path d="M12 9a4 4 0 0 0-2 7.5" />
          <Path d="M12 3v2" />
          <Path d="m6.6 18.4-1.4 1.4" />
          <Path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
          <Path d="M4 13H2" />
          <Path d="M6.34 7.34 4.93 5.93" />
        </G>
      </Svg>
    );
  }

