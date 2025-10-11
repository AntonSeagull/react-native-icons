

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutMediaRight = (props: IconProps) => {

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
          <Path  d="M8 4v9h9v-9h-9zM16 12h-7v-7h7v7zM1.174 4h5.826v1h-5.826v-1zM3.503 7.996h3.497v1h-3.497v-1zM6.991 6.998h-6.991v-1h6.991v1zM0.009 9.993h6.991v1h-6.991v-1zM1.174 12h5.826v1h-5.826v-1z" />
        </G>
      </Svg>
    );
  }

