

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbKarate = (props: IconProps) => {

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
          <Path d="M18 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M3 9l4.5 1l3 2.5" />
          <Path d="M13 21v-8l3 -5.5" />
          <Path d="M8 4.5l4 2l4 1l4 3.5l-2 3.5" />
        </G>
      </Svg>
    );
  }

