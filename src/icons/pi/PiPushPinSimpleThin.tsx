

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPushPinSimpleThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M216,172H203.36L180.77,44H192a4,4,0,0,0,0-8H64a4,4,0,0,0,0,8H75.23L52.64,172H40a4,4,0,0,0,0,8h84v60a4,4,0,0,0,8,0V180h84a4,4,0,0,0,0-8ZM83.36,44h89.28l22.59,128H60.77Z" />
        </G>
      </Svg>
    );
  }

