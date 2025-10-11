

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMassage = (props: IconProps) => {

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
          <Path d="M4 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M4 22l4 -2v-3h12" />
          <Path d="M11 20h9" />
          <Path d="M8 14l3 -2l1 -4c3 1 3 4 3 6" />
        </G>
      </Svg>
    );
  }

