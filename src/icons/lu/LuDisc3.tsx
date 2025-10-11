

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuDisc3 = (props: IconProps) => {

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
          <Path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
          <Path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
        </G>
      </Svg>
    );
  }

