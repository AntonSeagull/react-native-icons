

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDirectionsOff = (props: IconProps) => {

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
          <Path d="M12 21v-4" />
          <Path d="M12 13v-1" />
          <Path d="M12 5v-2" />
          <Path d="M10 21h4" />
          <Path d="M8 8v1h1m4 0h6l2 -2l-2 -2h-10" />
          <Path d="M14 14v3h-8l-2 -2l2 -2h7" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

