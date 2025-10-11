

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMoveHorizontal = (props: IconProps) => {

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
          <Path d="m18 8 4 4-4 4" />
          <Path d="M2 12h20" />
          <Path d="m6 8-4 4 4 4" />
        </G>
      </Svg>
    );
  }

