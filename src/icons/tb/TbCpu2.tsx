

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCpu2 = (props: IconProps) => {

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
          <Path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
          <Path d="M8 10v-2h2m6 6v2h-2m-4 0h-2v-2m8 -4v-2h-2" />
          <Path d="M3 10h2" />
          <Path d="M3 14h2" />
          <Path d="M10 3v2" />
          <Path d="M14 3v2" />
          <Path d="M21 10h-2" />
          <Path d="M21 14h-2" />
          <Path d="M14 21v-2" />
          <Path d="M10 21v-2" />
        </G>
      </Svg>
    );
  }

