

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiPin = (props: IconProps) => {

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
          <Path  d="M12 4.5c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 1.745 1.288 3.185 2.962 3.445v8.055h1v-8.047c1.71-0.228 3.038-1.682 3.038-3.453zM8.5 7c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5zM10 5h-1c0-0.552-0.448-1-1-1v-1c1.103 0 2 0.897 2 2z" />
        </G>
      </Svg>
    );
  }

