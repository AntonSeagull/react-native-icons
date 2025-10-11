

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaGripVerticalSolid = (props: IconProps) => {

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
          <Path  d="M 7 2 L 7 10 L 15 10 L 15 2 L 7 2 z M 17 2 L 17 10 L 25 10 L 25 2 L 17 2 z M 9 4 L 13 4 L 13 8 L 9 8 L 9 4 z M 19 4 L 23 4 L 23 8 L 19 8 L 19 4 z M 7 12 L 7 20 L 15 20 L 15 12 L 7 12 z M 17 12 L 17 20 L 25 20 L 25 12 L 17 12 z M 9 14 L 13 14 L 13 18 L 9 18 L 9 14 z M 19 14 L 23 14 L 23 18 L 19 18 L 19 14 z M 7 22 L 7 30 L 15 30 L 15 22 L 7 22 z M 17 22 L 17 30 L 25 30 L 25 22 L 17 22 z M 9 24 L 13 24 L 13 28 L 9 28 L 9 24 z M 19 24 L 23 24 L 23 28 L 19 28 L 19 24 z" />
        </G>
      </Svg>
    );
  }

