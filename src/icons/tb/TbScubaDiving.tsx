

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbScubaDiving = (props: IconProps) => {

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
          <Path d="M19 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path d="M2 2l3 3l1.5 4l3.5 2l6 2l1 4l2.5 3" />
          <Path d="M11 8l4.5 1.5" />
        </G>
      </Svg>
    );
  }

