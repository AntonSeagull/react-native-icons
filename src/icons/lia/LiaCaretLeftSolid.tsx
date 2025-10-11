

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaCaretLeftSolid = (props: IconProps) => {

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
          <Path  d="M 20 4.59375 L 18.28125 6.28125 L 9.28125 15.28125 L 8.59375 16 L 9.28125 16.71875 L 18.28125 25.71875 L 20 27.40625 Z M 18 9.4375 L 18 22.5625 L 11.4375 16 Z" />
        </G>
      </Svg>
    );
  }

