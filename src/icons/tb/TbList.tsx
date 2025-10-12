

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbList = (props: IconProps) => {

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
          <Path  d="M9 6l11 0" />
          <Path  d="M9 12l11 0" />
          <Path  d="M9 18l11 0" />
          <Path  d="M5 6l0 .01" />
          <Path  d="M5 12l0 .01" />
          <Path  d="M5 18l0 .01" />
        </G>
      </Svg>
    );
  }

