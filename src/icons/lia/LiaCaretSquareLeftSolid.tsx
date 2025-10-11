

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaCaretSquareLeftSolid = (props: IconProps) => {

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
          <Path d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 17.78125 9.28125 L 11.78125 15.28125 L 11.09375 16 L 11.78125 16.71875 L 17.78125 22.71875 L 19.21875 21.28125 L 13.9375 16 L 19.21875 10.71875 Z" />
        </G>
      </Svg>
    );
  }

