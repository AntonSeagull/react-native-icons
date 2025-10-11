

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowRotaryFirstRight = (props: IconProps) => {

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
          <Path d="M8 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M8 10v10" />
          <Path d="M10.5 9.5l8.5 8.5" />
          <Path d="M14 18h5v-5" />
        </G>
      </Svg>
    );
  }

