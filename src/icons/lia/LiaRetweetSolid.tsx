

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaRetweetSolid = (props: IconProps) => {

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
          <Path  d="M 5 7 L 0 12 L 4 12 L 4 25 L 21 25 L 19 23 L 6 23 L 6 12 L 10 12 Z M 9 7 L 11 9 L 24 9 L 24 20 L 20 20 L 25 25 L 30 20 L 26 20 L 26 7 Z" />
        </G>
      </Svg>
    );
  }

