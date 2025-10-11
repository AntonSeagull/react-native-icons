

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaReplySolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M 12.28125 5.28125 L 4.28125 13.28125 L 3.59375 14 L 4.28125 14.71875 L 12.28125 22.71875 L 13.71875 21.28125 L 7.4375 15 L 21 15 C 23.773438 15 26 17.226563 26 20 C 26 22.773438 23.773438 25 21 25 L 21 27 C 24.855469 27 28 23.855469 28 20 C 28 16.144531 24.855469 13 21 13 L 7.4375 13 L 13.71875 6.71875 Z" />
        </G>
      </Svg>
    );
  }

