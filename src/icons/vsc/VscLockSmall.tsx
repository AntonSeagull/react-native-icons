

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscLockSmall = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M3 8L4 7H12L13 8V13L12 14H4L3 13V8ZM4 8V13H12V8H4Z" />
          <Path  d="M11 7V5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5V7H11Z" />
        </G>
      </Svg>
    );
  }

