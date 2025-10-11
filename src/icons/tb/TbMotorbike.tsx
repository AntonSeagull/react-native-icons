

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMotorbike = (props: IconProps) => {

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
          <Path d="M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
          <Path d="M13 6h2l1.5 3l2 4" />
        </G>
      </Svg>
    );
  }

