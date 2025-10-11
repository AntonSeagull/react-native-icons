

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaPollSolid = (props: IconProps) => {

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
          <Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 15 10 L 15 22 L 17 22 L 17 10 L 15 10 z M 10 14 L 10 22 L 12 22 L 12 14 L 10 14 z M 20 16 L 20 22 L 22 22 L 22 16 L 20 16 z" />
        </G>
      </Svg>
    );
  }

