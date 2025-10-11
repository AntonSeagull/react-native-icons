

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBandage = (props: IconProps) => {

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
          <Path d="M10 10.01h.01" />
          <Path d="M10 14.01h.01" />
          <Path d="M14 10.01h.01" />
          <Path d="M14 14.01h.01" />
          <Path d="M18 6v11.5" />
          <Path d="M6 6v12" />
        </G>
      </Svg>
    );
  }

