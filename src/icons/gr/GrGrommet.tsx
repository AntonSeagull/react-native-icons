

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrGrommet = (props: IconProps) => {

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
          <Path  fill="none" stroke="#865CD6" d="M12,2 C6.485,2 2,6.485 2,12 C2,17.515 6.485,22 12,22 C17.515,22 22,17.515 22,12 C22,6.485 17.515,2 12,2 Z" strokeWidth="4" />
        </G>
      </Svg>
    );
  }

