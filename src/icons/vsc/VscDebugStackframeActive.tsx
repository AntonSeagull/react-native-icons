

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscDebugStackframeActive = (props: IconProps) => {

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
          <Path  d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
          <Path  d="M14.5 7.15l-4.26-4.74L9.31 2H4.25L3 3.25v9.48l1.25 1.25h5.06l.93-.42 4.26-4.74V7.15zm-5.19 5.58H4.25V3.25h5.06l4.26 4.73-4.26 4.75z" />
        </G>
      </Svg>
    );
  }

