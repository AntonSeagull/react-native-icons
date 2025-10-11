

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHttpHead = (props: IconProps) => {

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
          <Path d="M3 16v-8" />
          <Path d="M7 8v8" />
          <Path d="M3 12h4" />
          <Path d="M14 8h-4v8h4" />
          <Path d="M10 12h2.5" />
          <Path d="M17 16v-6a2 2 0 1 1 4 0v6" />
          <Path d="M17 13h4" />
        </G>
      </Svg>
    );
  }

