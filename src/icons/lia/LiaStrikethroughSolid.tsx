

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaStrikethroughSolid = (props: IconProps) => {

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
          <Path  d="M 7 6 L 7 8 L 15 8 L 15 16 L 10 16 L 10 18 L 15 18 L 15 26 L 17 26 L 17 18 L 22 18 L 22 16 L 17 16 L 17 8 L 25 8 L 25 6 Z" />
        </G>
      </Svg>
    );
  }

