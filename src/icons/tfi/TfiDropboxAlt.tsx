

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiDropboxAlt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M0.5 9.344l4.707 3.070 3.293-2.746-4.745-2.93z" />
          <Path  d="M5.207 1.062l-4.707 3.071 3.255 2.605 4.745-2.927z" />
          <Path  d="M16.5 4.133l-4.706-3.071-3.294 2.749 4.746 2.927z" />
          <Path  d="M8.5 9.668l3.294 2.746 4.706-3.070-3.254-2.606z" />
          <Path  d="M8.51 10.259l-3.303 2.739-1.413-0.924v1.035l4.716 2.829 4.717-2.829v-1.035l-1.414 0.924z" />
        </G>
      </Svg>
    );
  }

