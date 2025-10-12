

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPackageImport = (props: IconProps) => {

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
          <Path  d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" />
          <Path  d="M12 12l8 -4.5" />
          <Path  d="M12 12v9" />
          <Path  d="M12 12l-8 -4.5" />
          <Path  d="M22 18h-7" />
          <Path  d="M18 15l-3 3l3 3" />
        </G>
      </Svg>
    );
  }

