

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowRotaryFirstLeft = (props: IconProps) => {

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
          <Path d="M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z" />
          <Path d="M16 10v10" />
          <Path d="M13.5 9.5l-8.5 8.5" />
          <Path d="M10 18h-5v-5" />
        </G>
      </Svg>
    );
  }

