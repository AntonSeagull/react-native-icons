

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaHashtagSolid = (props: IconProps) => {

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
          <Path  d="M 11 5 L 11 11 L 5 11 L 5 13 L 11 13 L 11 19 L 5 19 L 5 21 L 11 21 L 11 27 L 13 27 L 13 21 L 19 21 L 19 27 L 21 27 L 21 21 L 27 21 L 27 19 L 21 19 L 21 13 L 27 13 L 27 11 L 21 11 L 21 5 L 19 5 L 19 11 L 13 11 L 13 5 Z M 13 13 L 19 13 L 19 19 L 13 19 Z" />
        </G>
      </Svg>
    );
  }

