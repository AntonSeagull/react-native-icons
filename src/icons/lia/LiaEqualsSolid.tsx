

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaEqualsSolid = (props: IconProps) => {

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
          <Path d="M 5 12 L 5 14 L 27 14 L 27 12 Z M 5 18 L 5 20 L 27 20 L 27 18 Z" />
        </G>
      </Svg>
    );
  }

