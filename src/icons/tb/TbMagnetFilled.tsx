

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMagnetFilled = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M21 9v4a9 9 0 0 1 -18 0v-4h7v4a2 2 0 1 0 4 0v-4zm-3 -7a3 3 0 0 1 3 3v2h-7v-2a3 3 0 0 1 3 -3zm-11 0a3 3 0 0 1 3 3v2h-7v-2a3 3 0 0 1 3 -3z" />
        </G>
      </Svg>
    );
  }

