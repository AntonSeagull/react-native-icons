

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHtml = (props: IconProps) => {

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
          <Path d="M13 16v-8l2 5l2 -5v8" />
          <Path d="M1 16v-8" />
          <Path d="M5 8v8" />
          <Path d="M1 12h4" />
          <Path d="M7 8h4" />
          <Path d="M9 8v8" />
          <Path d="M20 8v8h3" />
        </G>
      </Svg>
    );
  }

