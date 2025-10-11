

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiArrowUp = (props: IconProps) => {

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
          <Path  d="M15.146 8.854l-6.146-6.147v13.293h-1v-13.293l-6.146 6.147-0.708-0.708 7.354-7.353 7.354 7.354-0.708 0.707z" />
        </G>
      </Svg>
    );
  }

