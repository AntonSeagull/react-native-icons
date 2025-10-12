

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHexagons = (props: IconProps) => {

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
          <Path  d="M4 18v-5l4 -2l4 2v5l-4 2z" />
          <Path  d="M8 11v-5l4 -2l4 2v5" />
          <Path  d="M12 13l4 -2l4 2v5l-4 2l-4 -2" />
        </G>
      </Svg>
    );
  }

