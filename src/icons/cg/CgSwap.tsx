

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgSwap = (props: IconProps) => {

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
          <Path  d="M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z" fill="currentColor" />
          <Path  d="M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

