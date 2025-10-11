

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaVideoSlashSolid = (props: IconProps) => {

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
          <Path  d="M 3.71875 2.28125 L 2.28125 3.71875 L 28.28125 29.71875 L 29.71875 28.28125 L 24 22.5625 L 24 20.625 L 30 23.625 L 30 8.375 L 24 11.375 L 24 8 L 9.4375 8 Z M 2 8 L 2 24 L 20 24 L 18 22 L 4 22 L 4 10 L 6 10 L 4 8 Z M 11.4375 10 L 22 10 L 22 20.5625 Z M 28 11.625 L 28 20.375 L 24 18.375 L 24 13.625 Z" />
        </G>
      </Svg>
    );
  }

