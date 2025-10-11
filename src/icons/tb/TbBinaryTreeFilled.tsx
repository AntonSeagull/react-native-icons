

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBinaryTreeFilled = (props: IconProps) => {

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
          <Path  d="M14 1a3 3 0 0 1 2.348 4.868l2 3.203q .317 -.071 .652 -.071a3 3 0 1 1 -2.347 1.132l-2 -3.203a3 3 0 0 1 -1.304 0l-2.001 3.203c.408 .513 .652 1.162 .652 1.868s-.244 1.356 -.653 1.868l2.002 3.203q .315 -.071 .651 -.071a3 3 0 1 1 -2.347 1.132l-2.003 -3.203a3 3 0 0 1 -1.302 0l-2.002 3.203a3 3 0 1 1 -1.696 -1.06l2.002 -3.204a3 3 0 0 1 2.998 -4.798l2.002 -3.202a3 3 0 0 1 2.348 -4.868" />
        </G>
      </Svg>
    );
  }

