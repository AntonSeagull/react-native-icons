

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayers = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M13 1h-13v11h13v-11zM12 11h-11v-9h11v9zM17 5v11h-13v-3.031h1v2.031h11v-9h-2.016v-1h3.016z" fill="#000000" />
        </G>
      </Svg>
    );
  }

