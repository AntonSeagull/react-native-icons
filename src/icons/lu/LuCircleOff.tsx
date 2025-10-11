

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCircleOff = (props: IconProps) => {

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
          <Path d="m2 2 20 20" />
          <Path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
          <Path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
        </G>
      </Svg>
    );
  }

