

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCornerUpRightDouble = (props: IconProps) => {

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
          <Path d="M4 18v-6a3 3 0 0 1 3 -3h7" />
          <Path d="M10 13l4 -4l-4 -4m5 8l4 -4l-4 -4" />
        </G>
      </Svg>
    );
  }

