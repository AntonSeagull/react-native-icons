

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCloudSun = (props: IconProps) => {

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
          <Path  d="M12 2v2" />
          <Path  d="m4.93 4.93 1.41 1.41" />
          <Path  d="M20 12h2" />
          <Path  d="m19.07 4.93-1.41 1.41" />
          <Path  d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
          <Path  d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
        </G>
      </Svg>
    );
  }

