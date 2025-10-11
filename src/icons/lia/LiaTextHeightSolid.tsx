

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaTextHeightSolid = (props: IconProps) => {

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
          <Path d="M 4 6 L 4 8 L 11 8 L 11 26 L 13 26 L 13 8 L 20 8 L 20 6 Z M 25 6.625 L 21.5 11 L 24 11 L 24 21 L 21.5 21 L 25 25.375 L 28.5 21 L 26 21 L 26 11 L 28.5 11 Z" />
        </G>
      </Svg>
    );
  }

