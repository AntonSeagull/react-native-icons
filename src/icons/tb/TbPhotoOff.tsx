

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPhotoOff = (props: IconProps) => {

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
          <Path  d="M15 8h.01" />
          <Path  d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153" />
          <Path  d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
          <Path  d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

