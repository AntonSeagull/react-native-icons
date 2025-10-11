

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaQuoteLeftSolid = (props: IconProps) => {

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
          <Path d="M 10 8 C 6.699219 8 4 10.699219 4 14 L 4 24 L 14 24 L 14 14 L 6 14 C 6 11.78125 7.78125 10 10 10 Z M 24 8 C 20.699219 8 18 10.699219 18 14 L 18 24 L 28 24 L 28 14 L 20 14 C 20 11.78125 21.78125 10 24 10 Z M 6 16 L 12 16 L 12 22 L 6 22 Z M 20 16 L 26 16 L 26 22 L 20 22 Z" />
        </G>
      </Svg>
    );
  }

