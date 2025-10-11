

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowRampLeft = (props: IconProps) => {

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
          <Path d="M17 3l0 8.707" />
          <Path d="M13 7l4 -4l4 4" />
          <Path d="M7 14l-4 -4l4 -4" />
          <Path d="M17 21a11 11 0 0 0 -11 -11h-3" />
        </G>
      </Svg>
    );
  }

