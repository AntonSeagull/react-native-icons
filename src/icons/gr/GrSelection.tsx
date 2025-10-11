

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrSelection = (props: IconProps) => {

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
          <Path  fill="none" d="M5,18 L8,18 L8,6 L5,6 L5,18 Z M12,2 L12,22 L12,2 Z M1,22 L23,22 L23,2 L1,2 L1,22 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

