

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaViacoin = (props: IconProps) => {

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
          <Path d="M 6.28125 6 L 8.84375 12 L 5 12 L 5 14 L 9.6875 14 L 10.53125 16 L 5 16 L 5 18 L 11.40625 18 L 15.875 28.53125 L 20.46875 18 L 27 18 L 27 16 L 21.34375 16 L 22.21875 14 L 27 14 L 27 12 L 23.09375 12 L 25.71875 6 L 23.53125 6 L 19.15625 16 L 12.71875 16 L 8.4375 6 Z M 13.5625 18 L 18.28125 18 L 15.90625 23.46875 Z" />
        </G>
      </Svg>
    );
  }

