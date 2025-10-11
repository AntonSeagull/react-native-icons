

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidBookmarkStar = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12 11.222 14.667 13l-.89-3.111L16 8l-2.667-.333L12 5l-1.333 2.667L8 8l2.223 1.889L9.333 13z" />
          <Path d="M19 21.723V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v17.723l7-4.571 7 4.571zM8 8l2.667-.333L12 5l1.333 2.667L16 8l-2.223 1.889.89 3.111L12 11.222 9.333 13l.89-3.111L8 8z" />
        </G>
      </Svg>
    );
  }

