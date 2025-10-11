

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidCommentX = (props: IconProps) => {

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
          <Path  d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3.294 11.543-1.414 1.414-3.293-3.292-3.292 3.292-1.414-1.414 3.292-3.292-3.292-3.293 1.414-1.414 3.292 3.292 3.293-3.292 1.414 1.414-3.292 3.293 3.292 3.292z" />
        </G>
      </Svg>
    );
  }

