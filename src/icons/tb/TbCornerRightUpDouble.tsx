

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCornerRightUpDouble = (props: IconProps) => {

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
          <Path d="M5 19h6a3 3 0 0 0 3 -3v-7" />
          <Path d="M10 13l4 -4l4 4m-8 -5l4 -4l4 4" />
        </G>
      </Svg>
    );
  }

