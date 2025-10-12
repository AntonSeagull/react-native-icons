

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaShekelSignSolid = (props: IconProps) => {

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
          <Path  d="M 7 5 L 7 27 L 9 27 L 9 7 L 10 7 C 13.878906 7 17 10.121094 17 14 L 17 21 L 19 21 L 19 14 C 19 9.042969 14.957031 5 10 5 Z M 22 5 L 22 25 L 21 25 C 17.121094 25 14 21.878906 14 18 L 14 11 L 12 11 L 12 18 C 12 22.957031 16.042969 27 21 27 L 24 27 L 24 5 Z" />
        </G>
      </Svg>
    );
  }

