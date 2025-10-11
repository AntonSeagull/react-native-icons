

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbError404Off = (props: IconProps) => {

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
          <Path d="M3 7v4a1 1 0 0 0 1 1h3" />
          <Path d="M7 7v10" />
          <Path d="M10 10v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2m0 -4v-2a1 1 0 0 0 -1 -1h-2" />
          <Path d="M17 7v4a1 1 0 0 0 1 1h3" />
          <Path d="M21 7v10" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

