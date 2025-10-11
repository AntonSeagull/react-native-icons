

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMetronomeDuotone = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M200,216H56a8,8,0,0,1-7.63-10.43l12-37.57H195.66l12,37.57A8,8,0,0,1,200,216Z" />
          <Path d="M187.14,114.84l26.78-29.46a8,8,0,0,0-11.84-10.76l-20.55,22.6-17.2-54.07A15.94,15.94,0,0,0,149.08,32H106.91A15.94,15.94,0,0,0,91.66,43.15l-50.91,160A16,16,0,0,0,56,224H200a16,16,0,0,0,15.25-20.85ZM184.72,160H146.08l28.62-31.48ZM106.91,48h42.17l20,62.9L124.46,160H71.27ZM56,208l10.18-32H189.81L200,208Z" />
        </G>
      </Svg>
    );
  }

