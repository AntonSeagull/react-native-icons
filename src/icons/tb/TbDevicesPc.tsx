

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDevicesPc = (props: IconProps) => {

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
          <Path  d="M3 5h6v14h-6z" />
          <Path  d="M12 9h10v7h-10z" />
          <Path  d="M14 19h6" />
          <Path  d="M17 16v3" />
          <Path  d="M6 13v.01" />
          <Path  d="M6 16v.01" />
        </G>
      </Svg>
    );
  }

