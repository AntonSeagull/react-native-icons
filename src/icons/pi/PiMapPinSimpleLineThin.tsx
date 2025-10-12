

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMapPinSimpleLineThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M216,212H132V131.83a52,52,0,1,0-8,0V212H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM84,80a44,44,0,1,1,44,44A44.05,44.05,0,0,1,84,80Z" />
        </G>
      </Svg>
    );
  }

