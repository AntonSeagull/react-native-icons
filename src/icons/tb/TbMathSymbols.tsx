

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMathSymbols = (props: IconProps) => {

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
          <Path  d="M3 12l18 0" />
          <Path  d="M12 3l0 18" />
          <Path  d="M16.5 4.5l3 3" />
          <Path  d="M19.5 4.5l-3 3" />
          <Path  d="M6 4l0 4" />
          <Path  d="M4 6l4 0" />
          <Path  d="M18 16l.01 0" />
          <Path  d="M18 20l.01 0" />
          <Path  d="M4 18l4 0" />
        </G>
      </Svg>
    );
  }

