

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandTeams = (props: IconProps) => {

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
          <Path  d="M3 7h10v10h-10z" />
          <Path  d="M6 10h4" />
          <Path  d="M8 10v4" />
          <Path  d="M8.104 17c.47 2.274 2.483 4 4.896 4a5 5 0 0 0 5 -5v-7h-5" />
          <Path  d="M18 18a4 4 0 0 0 4 -4v-5h-4" />
          <Path  d="M13.003 8.83a3 3 0 1 0 -1.833 -1.833" />
          <Path  d="M15.83 8.36a2.5 2.5 0 1 0 .594 -4.117" />
        </G>
      </Svg>
    );
  }

