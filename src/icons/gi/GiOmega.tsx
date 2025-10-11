

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiOmega = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M259.05 73.105C155.53 73.105 71.2 163.14 71.2 274.65c0 42.674 12.272 82.822 33.265 115.45-24.44-13.235-48.45-29.26-72.4-48.92v95.108H206.87c-48-33.257-81.532-82.232-81.532-138.158 0-74.567 59.88-135.015 133.71-135.015 73.832 0 133.712 60.448 133.712 135.015 0 55.926-33.53 104.9-81.53 138.158h174.803V341.18c-24.02 19.865-48.295 36.2-73.052 49.57 21.297-32.77 33.92-73.09 33.92-116.1 0-111.51-84.33-201.545-187.85-201.545z" />
        </G>
      </Svg>
    );
  }

