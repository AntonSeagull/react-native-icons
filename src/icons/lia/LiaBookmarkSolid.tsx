

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaBookmarkSolid = (props: IconProps) => {

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
          <Path  d="M 7 5 L 7 28 L 8.59375 26.8125 L 16 21.25 L 23.40625 26.8125 L 25 28 L 25 5 Z M 9 7 L 23 7 L 23 24 L 16.59375 19.1875 L 16 18.75 L 15.40625 19.1875 L 9 24 Z" />
        </G>
      </Svg>
    );
  }

