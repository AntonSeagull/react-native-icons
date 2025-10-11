

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaPlaySolid = (props: IconProps) => {

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
          <Path d="M 9 5.15625 L 9 26.84375 L 10.53125 25.84375 L 25.84375 16 L 10.53125 6.15625 Z M 11 8.8125 L 22.15625 16 L 11 23.1875 Z" />
        </G>
      </Svg>
    );
  }

