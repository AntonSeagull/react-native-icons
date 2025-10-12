

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFeatherOff = (props: IconProps) => {

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
          <Path  d="M4 20l8 -8" />
          <Path  d="M14 5v5h5" />
          <Path  d="M9 11v4h4" />
          <Path  d="M6 13v5h5" />
          <Path  d="M6 13l3.502 -3.502m2.023 -2.023l2.475 -2.475" />
          <Path  d="M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1" />
          <Path  d="M11 18l3.499 -3.499m2.008 -2.008l2.493 -2.493" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

