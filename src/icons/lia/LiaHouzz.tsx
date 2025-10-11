

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaHouzz = (props: IconProps) => {

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
          <Path d="M 16 2.28125 L 8 6.84375 L 8 16 L 16 11.4375 Z M 16 11.4375 L 24 16 L 24 6.84375 Z M 24 16 L 16 20.5625 L 16 29.71875 L 24 25.15625 Z M 16 20.5625 L 8 16 L 8 25.15625 Z" />
        </G>
      </Svg>
    );
  }

