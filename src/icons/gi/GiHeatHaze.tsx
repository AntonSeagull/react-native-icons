

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiHeatHaze = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M328.094 16.28c-418.547 189.59 58.108 230.146-86.313 473.533C566.646 247.035 59.723 256.837 328.095 16.28zm10.844 32.44C154.714 186.1 475.226 253.64 369.717 409.06 561.48 253.028 248.215 203.768 338.94 48.72zM141 102.25c-174.244 135.025 104.332 215.754 61.063 367C307.03 285.77 42.887 268.31 141 102.25z" />
        </G>
      </Svg>
    );
  }

