

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWheelchair = (props: IconProps) => {

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
          <Path d="M8 16m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
          <Path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M19 17a3 3 0 0 0 -3 -3h-3.4" />
          <Path d="M3 3h1a2 2 0 0 1 2 2v6" />
          <Path d="M6 8h11" />
          <Path d="M15 8v6" />
        </G>
      </Svg>
    );
  }

