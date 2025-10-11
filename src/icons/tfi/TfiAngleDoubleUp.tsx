

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiAngleDoubleUp = (props: IconProps) => {

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
          <Path  d="M8.5 6.073l6.854 6.854-0.707 0.707-6.147-6.147-6.146 6.146-0.707-0.707 6.853-6.853zM8.5 2.644l6.146 6.146 0.707-0.707-6.853-6.854-6.854 6.854 0.708 0.707 6.146-6.146z" />
        </G>
      </Svg>
    );
  }

