

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiTechcrunch = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M4.673 12.51v1.888h3.776v7.551h3.776v-7.551h3.776v7.551h11.327v-3.776h-7.551v-3.776h7.551v-3.776h-7.551v3.776h-3.776v-3.776h-11.327v1.888z" fill="#444444" />
        </G>
      </Svg>
    );
  }

