

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTimeDuration60 = (props: IconProps) => {

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
          <Path d="M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
          <Path d="M11 9h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2" />
          <Path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        </G>
      </Svg>
    );
  }

