

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrSync = (props: IconProps) => {

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
          <Path  fill="none" d="M5,19 L16,19 C19.866,19 23,15.866 23,12 L23,9 M8,15 L4,19 L8,23 M19,5 L8,5 C4.134,5 1,8.134 1,12 L1,15 M16,1 L20,5 L16,9" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

