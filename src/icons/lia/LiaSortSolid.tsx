

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaSortSolid = (props: IconProps) => {

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
          <Path  d="M 16 3.59375 L 15.28125 4.28125 L 7.28125 12.28125 L 5.59375 14 L 26.40625 14 L 24.71875 12.28125 L 16.71875 4.28125 Z M 16 6.4375 L 21.5625 12 L 10.4375 12 Z M 5.59375 18 L 7.28125 19.71875 L 15.28125 27.71875 L 16 28.40625 L 16.71875 27.71875 L 24.71875 19.71875 L 26.40625 18 Z M 10.4375 20 L 21.5625 20 L 16 25.5625 Z" />
        </G>
      </Svg>
    );
  }

