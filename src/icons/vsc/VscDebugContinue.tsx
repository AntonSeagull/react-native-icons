

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscDebugContinue = (props: IconProps) => {

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
          <Path  d="M2.5 2H4v12H2.5V2zm4.936.39L6.25 3v10l1.186.61 7-5V7.39l-7-5zM12.71 8l-4.96 3.543V4.457L12.71 8z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

