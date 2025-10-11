

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBlinds = (props: IconProps) => {

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
          <Path d="M3 3h18" />
          <Path d="M20 7H8" />
          <Path d="M20 11H8" />
          <Path d="M10 19h10" />
          <Path d="M8 15h12" />
          <Path d="M4 3v14" />
        </G>
      </Svg>
    );
  }

