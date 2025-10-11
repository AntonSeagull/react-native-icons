

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowRampLeft3 = (props: IconProps) => {

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
          <Path d="M18 3v6" />
          <Path d="M8 16l-4 -4l4 -4" />
          <Path d="M18 21v-6a3 3 0 0 0 -3 -3h-11" />
        </G>
      </Svg>
    );
  }

