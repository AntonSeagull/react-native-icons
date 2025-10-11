

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscDebugReverseContinue = (props: IconProps) => {

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
          <Path  d="M13.5 2H12v12h1.5V2zm-4.936.39L9.75 3v10l-1.186.61-7-5V7.39l7-5zM3.29 8l4.96 3.543V4.457L3.29 8z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

