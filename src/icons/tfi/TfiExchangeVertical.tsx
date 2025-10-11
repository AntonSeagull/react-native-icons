

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiExchangeVertical = (props: IconProps) => {

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
          <Path  d="M6 15.043v-7.043h-1v7.043l-3.646-3.646-0.707 0.707 4.853 4.853 4.854-4.854-0.707-0.707-3.647 3.647zM5.488 15.531h0.023l-0.011 0.012-0.012-0.012zM15.646 5.604l-3.646-3.647v7.096h-1v-7.096l-3.646 3.647-0.708-0.708 4.854-4.853 4.854 4.854-0.708 0.707z" />
        </G>
      </Svg>
    );
  }

