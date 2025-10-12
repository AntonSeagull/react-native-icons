

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSchemaOff = (props: IconProps) => {

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
          <Path  d="M6 2h4v4m-4 0h-1v-1" />
          <Path  d="M15 11v-1h5v4h-2" />
          <Path  d="M5 18h5v4h-5z" />
          <Path  d="M5 10h5v4h-5z" />
          <Path  d="M10 12h2" />
          <Path  d="M7.5 7.5v2.5" />
          <Path  d="M7.5 14v4" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

