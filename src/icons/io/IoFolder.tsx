

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoFolder = (props: IconProps) => {

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
          <Path  d="M496,152a56,56,0,0,0-56-56H220.11a23.89,23.89,0,0,1-13.31-4L179,73.41A55.77,55.77,0,0,0,147.89,64H72a56,56,0,0,0-56,56v48a8,8,0,0,0,8,8H488a8,8,0,0,0,8-8Z" />
          <Path  d="M16,392a56,56,0,0,0,56,56H440a56,56,0,0,0,56-56V216a8,8,0,0,0-8-8H24a8,8,0,0,0-8,8Z" />
        </G>
      </Svg>
    );
  }

