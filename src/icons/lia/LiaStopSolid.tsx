

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaStopSolid = (props: IconProps) => {

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
          <Path d="M 6 6 L 6 26 L 26 26 L 26 6 Z M 8 8 L 24 8 L 24 24 L 8 24 Z" />
        </G>
      </Svg>
    );
  }

