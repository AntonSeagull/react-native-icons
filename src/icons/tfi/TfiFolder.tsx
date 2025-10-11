

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiFolder = (props: IconProps) => {

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
          <Path  d="M8 4l-1.958-2h-6.042v15h17v-13h-9zM5.622 3l1.958 2h8.42v2.027l-15-0.026v-4.001h4.622zM1 16v-7.999l15 0.026v7.973h-15z" />
        </G>
      </Svg>
    );
  }

