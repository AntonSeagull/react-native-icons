

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHaze = (props: IconProps) => {

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
          <Path d="M3 12h1" />
          <Path d="M12 3v1" />
          <Path d="M20 12h1" />
          <Path d="M5.6 5.6l.7 .7" />
          <Path d="M18.4 5.6l-.7 .7" />
          <Path d="M8 12a4 4 0 1 1 8 0" />
          <Path d="M3 16h18" />
          <Path d="M3 20h18" />
        </G>
      </Svg>
    );
  }

