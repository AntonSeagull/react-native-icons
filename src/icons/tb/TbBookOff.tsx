

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBookOff = (props: IconProps) => {

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
          <Path  d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096" />
          <Path  d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0" />
          <Path  d="M3 6v13" />
          <Path  d="M12 6v2m0 4v7" />
          <Path  d="M21 6v11" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

