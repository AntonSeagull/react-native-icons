

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaSignalSolid = (props: IconProps) => {

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
          <Path d="M 21 4 L 21 28 L 27 28 L 27 4 Z M 13 11 L 13 28 L 19 28 L 19 11 Z M 5 18 L 5 28 L 11 28 L 11 18 Z" />
        </G>
      </Svg>
    );
  }

