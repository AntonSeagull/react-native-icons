

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowRampRight3 = (props: IconProps) => {

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
          <Path d="M6 3v6" />
          <Path d="M16 16l4 -4l-4 -4" />
          <Path d="M6 21v-6a3 3 0 0 1 3 -3h11" />
        </G>
      </Svg>
    );
  }

