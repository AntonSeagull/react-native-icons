

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiMicrosoftAlt = (props: IconProps) => {

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
          <Path  d="M0 2.339l6.967-0.959v6.732h-6.967v-5.773zM0 14.661l6.967 0.959v-6.65h-6.967v5.691zM7.734 1.277v6.835h9.266v-8.112l-9.266 1.277zM7.734 15.723l9.266 1.277v-8.030h-9.266v6.753z" />
        </G>
      </Svg>
    );
  }

