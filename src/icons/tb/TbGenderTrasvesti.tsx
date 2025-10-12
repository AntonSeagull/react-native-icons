

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGenderTrasvesti = (props: IconProps) => {

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
          <Path  d="M15 20a5 5 0 1 1 0 -10a5 5 0 0 1 0 10z" />
          <Path  d="M6 6l5.4 5.4" />
          <Path  d="M4 8l4 -4" />
        </G>
      </Svg>
    );
  }

