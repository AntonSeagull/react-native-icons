

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrSort = (props: IconProps) => {

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
          <Path  fill="none" d="M7,3 L22,3 M7,9 L16,9 M7,15 L22,15 M2,2 L4,2 L4,4 L2,4 L2,2 Z M2,8 L4,8 L4,10 L2,10 L2,8 Z M2,14 L4,14 L4,16 L2,16 L2,14 Z M2,20 L4,20 L4,22 L2,22 L2,20 Z M7,21 L16,21" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

