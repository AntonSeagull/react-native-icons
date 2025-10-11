

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrush = (props: IconProps) => {

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
          <Path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
          <Path d="M21 3a16 16 0 0 0 -12.8 10.2" />
          <Path d="M21 3a16 16 0 0 1 -10.2 12.8" />
          <Path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
        </G>
      </Svg>
    );
  }

