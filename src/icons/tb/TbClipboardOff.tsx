

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbClipboardOff = (props: IconProps) => {

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
          <Path d="M5.575 5.597a2 2 0 0 0 -.575 1.403v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2m0 -4v-8a2 2 0 0 0 -2 -2h-2" />
          <Path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 1 1 0 4h-2" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

