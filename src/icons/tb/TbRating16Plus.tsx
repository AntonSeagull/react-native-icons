

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRating16Plus = (props: IconProps) => {

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
          <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path d="M11.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
          <Path d="M7 15v-6" />
          <Path d="M15.5 12h3" />
          <Path d="M17 10.5v3" />
          <Path d="M10 13.5v-3a1.5 1.5 0 0 1 1.5 -1.5h1" />
        </G>
      </Svg>
    );
  }

