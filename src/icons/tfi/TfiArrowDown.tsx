

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiArrowDown = (props: IconProps) => {

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
          <Path  d="M15.854 8.854l-7.354 7.353-7.354-7.353 0.707-0.707 6.147 6.146v-13.293h1v13.293l6.146-6.146 0.708 0.707z" />
        </G>
      </Svg>
    );
  }

