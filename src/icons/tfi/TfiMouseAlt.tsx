

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiMouseAlt = (props: IconProps) => {

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
          <Path  d="M8.5 0c-3.033 0-5.5 2.467-5.5 5.5v6c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5v-6c0-3.033-2.467-5.5-5.5-5.5zM13 5.5v0.5h-4v-4.949c2.244 0.252 4 2.139 4 4.449zM8 1.051v4.949h-4v-0.5c0-2.31 1.756-4.197 4-4.449zM8.5 16c-2.481 0-4.5-2.019-4.5-4.5v-4.5h9v4.5c0 2.481-2.019 4.5-4.5 4.5z" />
        </G>
      </Svg>
    );
  }

