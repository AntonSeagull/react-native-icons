

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCornerDownRightDouble = (props: IconProps) => {

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
          <Path d="M4 5v6a3 3 0 0 0 3 3h7" />
          <Path d="M10 10l4 4l-4 4m5 -8l4 4l-4 4" />
        </G>
      </Svg>
    );
  }

