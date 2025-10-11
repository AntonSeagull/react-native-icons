

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTractor = (props: IconProps) => {

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
          <Path d="M7 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <Path d="M7 15l0 .01" />
          <Path d="M19 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M10.5 17l6.5 0" />
          <Path d="M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5" />
          <Path d="M18 5h-1a1 1 0 0 0 -1 1v4" />
        </G>
      </Svg>
    );
  }

