

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaDyalog = (props: IconProps) => {

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
          <Path d="M 6 5 L 6 12 L 8 12 L 8 7 L 15 7 C 19.962 7 24 11.038 24 16 C 24 20.962 19.962 25 15 25 L 6 25 L 6 27 L 15 27 C 21.065 27 26 22.065 26 16 C 26 9.935 21.065 5 15 5 L 6 5 z" />
        </G>
      </Svg>
    );
  }

