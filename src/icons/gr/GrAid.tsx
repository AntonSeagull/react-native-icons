

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrAid = (props: IconProps) => {

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
          <Path  fill="none" d="M1,22 L23,22 L23,6 L1,6 L1,22 Z M8,6 L16,6 L16,2 L8,2 L8,6 Z M8,14 L16,14 M12,10 L12,18" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

