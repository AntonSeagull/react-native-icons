

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaHeadingSolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M 6 5 L 6 7 L 7 7 L 7 25 L 6 25 L 6 27 L 14 27 L 14 25 L 13 25 L 13 19 L 19 19 L 19 25 L 18 25 L 18 27 L 26 27 L 26 25 L 25 25 L 25 7 L 26 7 L 26 5 L 18 5 L 18 7 L 19 7 L 19 13 L 13 13 L 13 7 L 14 7 L 14 5 Z M 9 7 L 11 7 L 11 15 L 21 15 L 21 7 L 23 7 L 23 25 L 21 25 L 21 17 L 11 17 L 11 25 L 9 25 Z" />
        </G>
      </Svg>
    );
  }

