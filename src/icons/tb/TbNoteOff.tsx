

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbNoteOff = (props: IconProps) => {

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
          <Path d="M13 20l3.505 -3.505m2 -2l1.501 -1.501" />
          <Path d="M17 13h3v-7a2 2 0 0 0 -2 -2h-10m-3.427 .6c-.355 .36 -.573 .853 -.573 1.4v12a2 2 0 0 0 2 2h7v-6c0 -.272 .109 -.519 .285 -.699" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

