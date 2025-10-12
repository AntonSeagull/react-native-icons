

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLetterCaseUpper = (props: IconProps) => {

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
          <Path  d="M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
          <Path  d="M3 13h7" />
          <Path  d="M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
          <Path  d="M14 13h7" />
        </G>
      </Svg>
    );
  }

