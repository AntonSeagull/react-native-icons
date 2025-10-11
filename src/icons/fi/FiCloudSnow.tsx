

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiCloudSnow = (props: IconProps) => {

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
          <Line  x1="8" y1="16" x2="8.01" y2="16" />
          <Line  x1="8" y1="20" x2="8.01" y2="20" />
          <Line  x1="12" y1="18" x2="12.01" y2="18" />
          <Line  x1="12" y1="22" x2="12.01" y2="22" />
          <Line  x1="16" y1="16" x2="16.01" y2="16" />
          <Line  x1="16" y1="20" x2="16.01" y2="20" />
          <Path  d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
        </G>
      </Svg>
    );
  }

