

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBriefcaseMetalBold = (props: IconProps) => {

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
          <Path  d="M216,52H180V40a28,28,0,0,0-28-28H104A28,28,0,0,0,76,40V52H40A20,20,0,0,0,20,72V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V72A20,20,0,0,0,216,52ZM44,120H212v32H44Zm56-80a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V52H100ZM212,76V96H44V76ZM44,196V176H212v20Z" />
        </G>
      </Svg>
    );
  }

