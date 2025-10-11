

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsUpLeft = (props: IconProps) => {

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
          <Path d="M21 7l-4 -4l-4 4" />
          <Path d="M17 3v11a3 3 0 0 1 -3 3h-11" />
          <Path d="M7 13l-4 4l4 4" />
        </G>
      </Svg>
    );
  }

