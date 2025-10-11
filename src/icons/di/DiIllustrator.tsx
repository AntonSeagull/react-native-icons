

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiIllustrator = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 34 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M21.66 10.97c0.695 0 1.264-0.563 1.264-1.253s-0.569-1.253-1.264-1.253c-0.695 0-1.264 0.563-1.264 1.253 0 0.695 0.563 1.253 1.264 1.253z" fill="#444444" />
          <Path d="M20.425 12.067h2.442v9.183h-2.442v-9.183z" fill="#444444" />
          <Path d="M12.655 18.171h3.304l0.893 3.076h2.501l-3.632-12.066h-3.036v1.191l-3.185 10.875h2.262l0.893-3.076zM14.292 11.328l1.221 4.733h-2.441l1.22-4.733z" fill="#444444" />
          <Path d="M3.002 2.316v27.007h27.582v-27.007h-27.582zM28.516 27.197h-23.406v-22.755h23.406l-0 22.755z" fill="#444444" />
        </G>
      </Svg>
    );
  }

