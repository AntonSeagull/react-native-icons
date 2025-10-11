

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaRulerVerticalSolid = (props: IconProps) => {

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
          <Path d="M 8 0 L 8 32 L 24 32 L 24 0 L 8 0 z M 10 2 L 22 2 L 22 5 L 15 5 L 15 7 L 22 7 L 22 9 L 18 9 L 18 11 L 22 11 L 22 13 L 15 13 L 15 15 L 22 15 L 22 17 L 18 17 L 18 19 L 22 19 L 22 21 L 15 21 L 15 23 L 22 23 L 22 25 L 18 25 L 18 27 L 22 27 L 22 30 L 10 30 L 10 2 z" />
        </G>
      </Svg>
    );
  }

