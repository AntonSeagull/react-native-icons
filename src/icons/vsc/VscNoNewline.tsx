

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscNoNewline = (props: IconProps) => {

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
          <Path  d="M2.333 5.506a3 3 0 1 1 3.334 4.989 3 3 0 0 1-3.334-4.99zm2.677.777A1.986 1.986 0 0 0 2 8.009c.004.353.102.698.283 1.001L5.01 6.283zM2.99 9.717A1.986 1.986 0 0 0 6 7.991a1.988 1.988 0 0 0-.283-1.001L2.99 9.717zM14 5v1.984a.5.5 0 0 1-.5.5H9.367L11 5.851l-.707-.707-2.121 2.121-.423.423v.568l2.544 2.544.707-.707-1.61-1.609h4.11a1.5 1.5 0 0 0 1.5-1.5V5h-1z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

