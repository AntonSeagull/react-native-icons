

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiFilm = (props: IconProps) => {

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
          <Line  x1="7" y1="2" x2="7" y2="22" />
          <Line  x1="17" y1="2" x2="17" y2="22" />
          <Line  x1="2" y1="12" x2="22" y2="12" />
          <Line  x1="2" y1="7" x2="7" y2="7" />
          <Line  x1="2" y1="17" x2="7" y2="17" />
          <Line  x1="17" y1="17" x2="22" y2="17" />
          <Line  x1="17" y1="7" x2="22" y2="7" />
        </G>
      </Svg>
    );
  }

