

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrIceCream = (props: IconProps) => {

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
          <Path  fill="none" d="M17,8 C19,8 19,6.5 17.5,6.5 C17.5,3.5 15.5,1 12,1 C8.5,1 6.5,3.5 6.5,6.5 C5,6.5 5,8 7,8 M7,8 L17,8 L12,21 L7,8 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

