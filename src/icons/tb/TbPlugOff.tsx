

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlugOff = (props: IconProps) => {

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
          <Path d="M16.123 16.092l-.177 .177a5.81 5.81 0 1 1 -8.215 -8.215l.159 -.159" />
          <Path d="M4 20l3.5 -3.5" />
          <Path d="M15 4l-3.5 3.5" />
          <Path d="M20 9l-3.5 3.5" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

