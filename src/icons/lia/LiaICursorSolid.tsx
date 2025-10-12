

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaICursorSolid = (props: IconProps) => {

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
          <Path  d="M 10 5 L 10 7 L 12 7 C 13.667969 7 15 8.332031 15 10 L 15 14 L 12 14 L 12 16 L 15 16 L 15 22 C 15 23.667969 13.667969 25 12 25 L 10 25 L 10 27 L 12 27 C 13.632813 27 15.085938 26.1875 16 24.96875 C 16.914063 26.1875 18.367188 27 20 27 L 22 27 L 22 25 L 20 25 C 18.332031 25 17 23.667969 17 22 L 17 16 L 20 16 L 20 14 L 17 14 L 17 10 C 17 8.332031 18.332031 7 20 7 L 22 7 L 22 5 L 20 5 C 18.367188 5 16.914063 5.8125 16 7.03125 C 15.085938 5.8125 13.632813 5 12 5 Z" />
        </G>
      </Svg>
    );
  }

