

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHttpPut = (props: IconProps) => {

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
          <Path d="M3 12h2a2 2 0 1 0 0 -4h-2v8" />
          <Path d="M17 8h4" />
          <Path d="M19 8v8" />
          <Path d="M10 8v6a2 2 0 1 0 4 0v-6" />
        </G>
      </Svg>
    );
  }

