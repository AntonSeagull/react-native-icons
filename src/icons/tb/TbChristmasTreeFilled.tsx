

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChristmasTreeFilled = (props: IconProps) => {

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
          <Path  d="M15 19v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-1zm-10 -1c-.89 0 -1.337 -1.077 -.707 -1.707l2.855 -2.857l-1.464 -.487a1 1 0 0 1 -.472 -1.565l.08 -.091l3.019 -3.02l-.758 -.379a1 1 0 0 1 -.343 -1.507l.083 -.094l4 -4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 -.26 1.601l-.759 .379l3.02 3.02a1 1 0 0 1 -.279 1.61l-.113 .046l-1.465 .487l2.856 2.857c.603 .602 .22 1.614 -.593 1.701l-.114 .006z" />
        </G>
      </Svg>
    );
  }

