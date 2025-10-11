

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaCarBatterySolid = (props: IconProps) => {

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
          <Path d="M 8 6 L 8 8 L 12 8 L 12 6 Z M 20 6 L 20 8 L 24 8 L 24 6 Z M 4 9 L 4 27 L 28 27 L 28 9 Z M 6 11 L 26 11 L 26 25 L 6 25 Z M 20 15 L 20 17 L 18 17 L 18 19 L 20 19 L 20 21 L 22 21 L 22 19 L 24 19 L 24 17 L 22 17 L 22 15 Z M 8 17 L 8 19 L 14 19 L 14 17 Z" />
        </G>
      </Svg>
    );
  }

