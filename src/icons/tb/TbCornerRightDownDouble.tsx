

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCornerRightDownDouble = (props: IconProps) => {

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
          <Path d="M5 4h6a3 3 0 0 1 3 3v7" />
          <Path d="M10 10l4 4l4 -4m-8 5l4 4l4 -4" />
        </G>
      </Svg>
    );
  }

