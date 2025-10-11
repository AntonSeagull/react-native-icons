

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSunWind = (props: IconProps) => {

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
          <Path d="M14.468 10a4 4 0 1 0 -5.466 5.46" />
          <Path d="M2 12h1" />
          <Path d="M11 3v1" />
          <Path d="M11 20v1" />
          <Path d="M4.6 5.6l.7 .7" />
          <Path d="M17.4 5.6l-.7 .7" />
          <Path d="M5.3 17.7l-.7 .7" />
          <Path d="M15 13h5a2 2 0 1 0 0 -4" />
          <Path d="M12 16h5.714l.253 0a2 2 0 0 1 2.033 2a2 2 0 0 1 -2 2h-.286" />
        </G>
      </Svg>
    );
  }

