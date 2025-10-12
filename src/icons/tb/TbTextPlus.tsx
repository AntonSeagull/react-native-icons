

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTextPlus = (props: IconProps) => {

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
          <Path  d="M19 10h-14" />
          <Path  d="M5 6h14" />
          <Path  d="M14 14h-9" />
          <Path  d="M5 18h6" />
          <Path  d="M18 15v6" />
          <Path  d="M15 18h6" />
        </G>
      </Svg>
    );
  }

