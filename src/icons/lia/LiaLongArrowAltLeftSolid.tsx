

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaLongArrowAltLeftSolid = (props: IconProps) => {

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
          <Path d="M 10.8125 9.28125 L 4.09375 16 L 10.8125 22.71875 L 12.21875 21.28125 L 7.9375 17 L 28 17 L 28 15 L 7.9375 15 L 12.21875 10.71875 Z" />
        </G>
      </Svg>
    );
  }

