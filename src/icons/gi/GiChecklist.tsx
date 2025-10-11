

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiChecklist = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M122.31 84.615l-2.85 8.54-11.394 34.185-5.703-5.703L96 115.27 83.27 128l6.367 6.363 26.297 26.297 20.605-61.814 2.845-8.537-17.076-5.695zM151 119v18h242v-18H151zm0 64v18h242v-18H151zm0 64v18h242v-18H151zm-28.69 29.615l-2.85 8.54-11.394 34.185-5.703-5.703L96 307.27 83.27 320l6.367 6.363 26.297 26.297 20.605-61.814 2.845-8.537-17.076-5.695zM151 311v18h242v-18H151zm0 64v18h242v-18H151z" fill="#000" />
        </G>
      </Svg>
    );
  }

