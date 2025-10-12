

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrNetworkDrive = (props: IconProps) => {

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
          <Path  d="M12 14v4M22 6v6a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h18a1 1 0 011 1zM12 21a2 2 0 100-4 2 2 0 000 4zM6 10a1 1 0 100-2 1 1 0 000 2z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

