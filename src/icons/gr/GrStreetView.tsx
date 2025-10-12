

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrStreetView = (props: IconProps) => {

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
          <Path  fill="none" d="M16,5 C16,7.209 14.209,9 12,9 C9.791,9 8,7.209 8,5 C8,2.791 9.791,1 12,1 C14.209,1 16,2.791 16,5 L16,5 Z M15,23 L15,17 L18,17 L18,15 C18,11.66 15.24,9.03 12,9 C8.79,9.03 6,11.66 6,15 L6,17 L9,17 L9,23 M3.5,23 L20.5,23 L3.5,23 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

