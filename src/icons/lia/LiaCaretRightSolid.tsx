

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaCaretRightSolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M 12 4.59375 L 12 27.40625 L 13.71875 25.71875 L 22.71875 16.71875 L 23.40625 16 L 22.71875 15.28125 L 13.71875 6.28125 Z M 14 9.4375 L 20.5625 16 L 14 22.5625 Z" />
        </G>
      </Svg>
    );
  }

