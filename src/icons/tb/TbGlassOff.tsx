

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGlassOff = (props: IconProps) => {

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
          <Path d="M8 21h8" />
          <Path d="M12 16v5" />
          <Path d="M17 5l1 6c0 .887 -.233 1.685 -.646 2.37m-2.083 1.886c-.941 .48 -2.064 .744 -3.271 .744c-3.314 0 -6 -1.988 -6 -5l.711 -4.268" />
          <Path d="M10.983 6.959c.329 .027 .669 .041 1.017 .041c2.761 0 5 -.895 5 -2s-2.239 -2 -5 -2c-1.716 0 -3.23 .346 -4.13 .872" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

