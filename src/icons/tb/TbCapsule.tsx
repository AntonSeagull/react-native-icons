

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCapsule = (props: IconProps) => {

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
          <Path  d="M6 3m0 6a6 6 0 0 1 6 -6h0a6 6 0 0 1 6 6v6a6 6 0 0 1 -6 6h0a6 6 0 0 1 -6 -6z" />
        </G>
      </Svg>
    );
  }

