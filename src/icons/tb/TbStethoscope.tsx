

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbStethoscope = (props: IconProps) => {

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
          <Path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" />
          <Path d="M8 15a6 6 0 1 0 12 0v-3" />
          <Path d="M11 3v2" />
          <Path d="M6 3v2" />
          <Path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        </G>
      </Svg>
    );
  }

