

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLocationArrow = (props: IconProps) => {

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
          <Path  d="M1.971 1.966l5.288 14.101 1.212-7.601 7.601-1.212-14.101-5.288zM7.598 7.592l-0.731 4.582-3.187-8.499 8.499 3.187-4.581 0.73z" />
        </G>
      </Svg>
    );
  }

