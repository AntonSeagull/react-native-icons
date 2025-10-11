

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHttpTrace = (props: IconProps) => {

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
          <Path d="M3 8h4" />
          <Path d="M5 8v8" />
          <Path d="M10 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4" />
          <Path d="M17 16v-6a2 2 0 1 1 4 0v6" />
          <Path d="M17 13h4" />
        </G>
      </Svg>
    );
  }

