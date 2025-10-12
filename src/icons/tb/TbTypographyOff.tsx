

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTypographyOff = (props: IconProps) => {

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
          <Path  d="M4 20h3" />
          <Path  d="M14 20h6" />
          <Path  d="M6.9 15h6.9" />
          <Path  d="M13 13l3 7" />
          <Path  d="M5 20l4.09 -10.906" />
          <Path  d="M10.181 6.183l.819 -2.183h2l3.904 8.924" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

