

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWheel = (props: IconProps) => {

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
          <Path  d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path  d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path  d="M3 12h6" />
          <Path  d="M15 12h6" />
          <Path  d="M13.6 9.4l3.4 -4.8" />
          <Path  d="M10.4 14.6l-3.4 4.8" />
          <Path  d="M7 4.6l3.4 4.8" />
          <Path  d="M13.6 14.6l3.4 4.8" />
        </G>
      </Svg>
    );
  }

