

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTex = (props: IconProps) => {

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
          <Path d="M9 8v-1h-6v1" />
          <Path d="M6 15v-8" />
          <Path d="M21 15l-5 -8" />
          <Path d="M16 15l5 -8" />
          <Path d="M14 11h-4v8h4" />
          <Path d="M10 15h3" />
        </G>
      </Svg>
    );
  }

