

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiHtml5 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M15.54 0.5l-1.28 14.379-5.78 1.621-5.74-1.621-1.28-14.379h14.080zM12.92 3.439h-8.84l0.47 5.34h6.121l-0.222 2.279-1.969 0.532-1.96-0.531-0.13-1.399h-1.749l0.22 2.779 3.62 1h0.039v-0.010l3.591-0.99 0.5-5.44h-6.441l-0.15-1.81h6.74l0.16-1.75z" />
        </G>
      </Svg>
    );
  }

