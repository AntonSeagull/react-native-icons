

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrView = (props: IconProps) => {

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
          <Path  fill="none" d="M12,21 C7,21 1,16 1,12 C1,8 7,3 12,3 C17,3 23,8 23,12 C23,16 17,21 12,21 Z M12,7 C9.23875,7 7,9.23875 7,12 C7,14.76125 9.23875,17 12,17 C14.76125,17 17,14.76125 17,12 C17,9.23875 14.76125,7 12,7 L12,7 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

