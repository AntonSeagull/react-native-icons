

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSunElectricity = (props: IconProps) => {

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
          <Path d="M8 12a4 4 0 0 0 4 4m0 -8a4 4 0 0 0 -4 4" />
          <Path d="M3 12h1" />
          <Path d="M12 3v1" />
          <Path d="M12 20v1" />
          <Path d="M5.6 5.6l.7 .7" />
          <Path d="M6.3 17.7l-.7 .7" />
          <Path d="M20 7l-3 5h4l-3 5" />
        </G>
      </Svg>
    );
  }

