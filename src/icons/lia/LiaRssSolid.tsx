

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaRssSolid = (props: IconProps) => {

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
          <Path d="M 5 5 L 5 9 C 14.93 9 23 17.07 23 27 L 27 27 C 27 14.85 17.15 5 5 5 z M 5 12 L 5 16 C 11.07 16 16 20.93 16 27 L 20 27 C 20 18.72 13.28 12 5 12 z M 8 21 A 3 3 0 0 0 8 27 A 3 3 0 0 0 8 21 z" />
        </G>
      </Svg>
    );
  }

