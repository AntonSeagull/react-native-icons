

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiTechcrunch = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#444444" d="M4.673 12.51v1.888h3.776v7.551h3.776v-7.551h3.776v7.551h11.327v-3.776h-7.551v-3.776h7.551v-3.776h-7.551v3.776h-3.776v-3.776h-11.327v1.888z" />
        </G>
      </Svg>
    );
  }

