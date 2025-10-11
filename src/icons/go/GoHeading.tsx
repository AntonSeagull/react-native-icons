

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoHeading = (props: IconProps) => {

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
          <Path  d="M6.25 4a.75.75 0 0 1 .75.75V11h10V4.75a.75.75 0 0 1 1.5 0v14.5a.75.75 0 0 1-1.5 0V12.5H7v6.75a.75.75 0 0 1-1.5 0V4.75A.75.75 0 0 1 6.25 4Z" />
        </G>
      </Svg>
    );
  }

