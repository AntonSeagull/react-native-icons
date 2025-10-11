

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoFlashlightOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Line  x1="289" y1="81" x2="431" y2="223" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M456.64,162.86,349.12,55.36c-13.15-13.14-28.68-7.17-41.82,6l-11.95,12c-26.13,26.13-27.62,58.38-29.42,83.31-.89,12.24-9.78,27.55-18.51,36.28L58.58,381.67C42.23,398,45.89,421.09,62.31,437.51l12.17,12.17c16.36,16.35,39.43,20.16,55.86,3.74l188.83-188.8c8.74-8.74,24-17.55,36.29-18.52,24.87-1.86,58.62-4.85,83.26-29.49l11.94-11.94C463.81,191.53,469.78,176,456.64,162.86Z" fill="none" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

