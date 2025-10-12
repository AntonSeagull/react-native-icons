

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbToiletPaper = (props: IconProps) => {

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
          <Path  d="M6 10m-3 0a3 7 0 1 0 6 0a3 7 0 1 0 -6 0" />
          <Path  d="M21 10c0 -3.866 -1.343 -7 -3 -7" />
          <Path  d="M6 3h12" />
          <Path  d="M21 10v10l-3 -1l-3 2l-3 -3l-3 2v-10" />
          <Path  d="M6 10h.01" />
        </G>
      </Svg>
    );
  }

