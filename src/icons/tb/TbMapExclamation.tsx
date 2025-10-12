

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMapExclamation = (props: IconProps) => {

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
          <Path  d="M15 20l-6 -3l-6 3v-13l6 -3l6 3l6 -3v8.5" />
          <Path  d="M9 4v13" />
          <Path  d="M15 7v13" />
          <Path  d="M19 16v3" />
          <Path  d="M19 22v.01" />
        </G>
      </Svg>
    );
  }

