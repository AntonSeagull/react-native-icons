

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSatellite = (props: IconProps) => {

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
          <Path  d="M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414z" />
          <Path  d="M6 10l-3 3l3 3l3 -3" />
          <Path  d="M10 6l3 -3l3 3l-3 3" />
          <Path  d="M12 12l1.5 1.5" />
          <Path  d="M14.5 17a2.5 2.5 0 0 0 2.5 -2.5" />
          <Path  d="M15 21a6 6 0 0 0 6 -6" />
        </G>
      </Svg>
    );
  }

