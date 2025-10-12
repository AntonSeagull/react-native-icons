

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiLibya = (props: IconProps) => {

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
          <Path  d="M477.6 99.68l8.5 363.72L454 465 211.7 351.9l-48.1 28.2-137.68-94 14.52-133L98.59 46.98 199.4 77.54l13.1 25.96 97 39.7 34.4-13.8-19.1-45.75 82.5-22.92z" />
        </G>
      </Svg>
    );
  }

