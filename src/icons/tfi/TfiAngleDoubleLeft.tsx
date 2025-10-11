

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiAngleDoubleLeft = (props: IconProps) => {

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
          <Path  d="M7.987 8.5l6.146 6.146-0.707 0.707-6.853-6.853 6.854-6.854 0.707 0.707-6.147 6.147zM9.29 2.353l-0.707-0.707-6.854 6.854 6.854 6.854 0.707-0.707-6.146-6.147 6.146-6.147z" />
        </G>
      </Svg>
    );
  }

