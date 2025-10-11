

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaPollHSolid = (props: IconProps) => {

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
          <Path  d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 10 10 L 10 12 L 18 12 L 18 10 L 10 10 z M 10 15 L 10 17 L 22 17 L 22 15 L 10 15 z M 10 20 L 10 22 L 16 22 L 16 20 L 10 20 z" />
        </G>
      </Svg>
    );
  }

