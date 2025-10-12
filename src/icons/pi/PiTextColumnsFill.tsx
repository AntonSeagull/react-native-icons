

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextColumnsFill = (props: IconProps) => {

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
          <Path  d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM112,184H56a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm88,96H144a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H144a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H144a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H144a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Z" />
        </G>
      </Svg>
    );
  }

