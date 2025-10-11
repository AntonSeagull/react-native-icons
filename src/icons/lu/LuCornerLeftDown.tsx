

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCornerLeftDown = (props: IconProps) => {

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
          <Path d="m14 15-5 5-5-5" />
          <Path d="M20 4h-7a4 4 0 0 0-4 4v12" />
        </G>
      </Svg>
    );
  }

