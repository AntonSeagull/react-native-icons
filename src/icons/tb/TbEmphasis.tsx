

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbEmphasis = (props: IconProps) => {

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
          <Path  d="M16 5h-8v10h8m-1 -5h-7" />
          <Path  d="M6 20l0 .01" />
          <Path  d="M10 20l0 .01" />
          <Path  d="M14 20l0 .01" />
          <Path  d="M18 20l0 .01" />
        </G>
      </Svg>
    );
  }

