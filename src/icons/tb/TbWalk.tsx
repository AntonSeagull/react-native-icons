

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWalk = (props: IconProps) => {

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
          <Path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M7 21l3 -4" />
          <Path d="M16 21l-2 -4l-3 -3l1 -6" />
          <Path d="M6 12l2 -3l4 -1l3 3l3 1" />
        </G>
      </Svg>
    );
  }

