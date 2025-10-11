

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRewindForward15 = (props: IconProps) => {

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
          <Path d="M17 9l3 -3l-3 -3" />
          <Path d="M9 18a6 6 0 1 1 0 -12h11" />
          <Path d="M16 20h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" />
          <Path d="M13 14v6" />
        </G>
      </Svg>
    );
  }

