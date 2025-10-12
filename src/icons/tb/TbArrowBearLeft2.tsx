

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowBearLeft2 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M9 3h-5v5" />
          <Path  d="M4 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93" />
          <Path  d="M20 5l-4.5 4.5" />
        </G>
      </Svg>
    );
  }

