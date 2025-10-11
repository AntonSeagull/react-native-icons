

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbStretching = (props: IconProps) => {

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
          <Path d="M16 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M5 20l5 -.5l1 -2" />
          <Path d="M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2" />
        </G>
      </Svg>
    );
  }

