

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbForklift = (props: IconProps) => {

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
          <Path d="M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M14 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M7 17l5 0" />
          <Path d="M3 17v-6h13v6" />
          <Path d="M5 11v-4h4" />
          <Path d="M9 11v-6h4l3 6" />
          <Path d="M22 15h-3v-10" />
          <Path d="M16 13l3 0" />
        </G>
      </Svg>
    );
  }

