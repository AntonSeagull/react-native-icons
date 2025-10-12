

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuOrbit = (props: IconProps) => {

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
          <Circle  cx="12" cy="12" r="3" />
          <Circle  cx="19" cy="5" r="2" />
          <Circle  cx="5" cy="19" r="2" />
          <Path  d="M20.341 6.484A10 10 0 0 1 10.266 21.85" />
          <Path  d="M3.659 17.516A10 10 0 0 1 13.74 2.152" />
        </G>
      </Svg>
    );
  }

