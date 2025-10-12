

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscDebugBreakpointFunctionUnverified = (props: IconProps) => {

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
          <Path  d="M4 11h8L8 4l-4 7zm2.154-1.25h3.692L8 6.52 6.154 9.75z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

