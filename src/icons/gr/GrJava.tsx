

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrJava = (props: IconProps) => {

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
          <Path  fill="none" d="M1,18 L1,9 L17,9 L17,18 C17,22 15,23 9,23 C3,23 1,22 1,18 Z M17,9 L17,12 C17,13.657 18.343,15 20,15 C21.657,15 23,13.657 23,12 C23,10.343 21.657,9 20,9 L17,9 Z M13,6 L13,2 M5,6 L5,4 M9,6 L9,0" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

