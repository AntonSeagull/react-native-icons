

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPageBreak = (props: IconProps) => {

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
          <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <Path d="M19 18v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1" />
          <Path d="M3 14h3m4.5 0h3m4.5 0h3" />
          <Path d="M5 10v-5a2 2 0 0 1 2 -2h7l5 5v2" />
        </G>
      </Svg>
    );
  }

