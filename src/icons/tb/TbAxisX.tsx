

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAxisX = (props: IconProps) => {

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
          <Path  d="M4 13v.01" />
          <Path  d="M4 9v.01" />
          <Path  d="M4 5v.01" />
          <Path  d="M17 20l3 -3l-3 -3" />
          <Path  d="M4 17h16" />
        </G>
      </Svg>
    );
  }

