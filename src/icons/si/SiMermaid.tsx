

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiMermaid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M23.99 2.115A12.223 12.223 0 0 0 12 10.149 12.223 12.223 0 0 0 .01 2.115a12.23 12.23 0 0 0 5.32 10.604 6.562 6.562 0 0 1 2.845 5.423v3.754h7.65v-3.754a6.561 6.561 0 0 1 2.844-5.423 12.223 12.223 0 0 0 5.32-10.604Z" />
        </G>
      </Svg>
    );
  }

