

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCapacity = (props: IconProps) => {

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
          <Path  fill="none" d="M1,19 L23,19 L23,5 L1,5 L1,19 Z M4,16 L7,16 L7,8 L4,8 L4,16 Z M10,16 L13,16 L13,8 L10,8 L10,16 Z" strokeLinecap="round" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

