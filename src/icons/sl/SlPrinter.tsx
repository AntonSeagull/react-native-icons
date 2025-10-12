

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SlPrinter = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 1024 1024"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 512, 512)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M952.736 254.928H832.017V.48H191.985v254.448H71.265c-39.312 0-71.312 32-71.312 71.344V760.16c0 39.344 32 71.344 71.311 71.344h120.72v192.016h640.032V831.504h120.72c39.313 0 71.313-32 71.313-71.344V326.272c0-39.344-32-71.344-71.313-71.344zM255.985 63.487h512.032v191.44H255.985V63.487zM768.018 959.52H255.986v-352.4h512.032v352.4zM960.05 760.159c0 4.08-3.28 7.344-7.313 7.344h-120.72V543.119H191.985v224.368H71.265c-4.032 0-7.312-3.264-7.312-7.344V326.271c0-4.064 3.28-7.345 7.312-7.345h881.472c4.033 0 7.313 3.28 7.313 7.345zm-128.048-376.72h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h32c17.664 0 32-14.336 32-32s-14.336-32-32-32z" />
        </G>
      </Svg>
    );
  }

