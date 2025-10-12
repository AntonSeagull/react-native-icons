

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiPin2 = (props: IconProps) => {

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
          <Path  d="M8 11.5h1v5.5h-1v-5.5zM14 8.8v2.2h-11v-2.2l1.094-0.487 1.106-6.313-0.429-0.779-0.671-1.221h8.8l-0.672 1.221-0.428 0.779 1.106 6.312 1.094 0.488zM13 9.449l-0.986-0.44-0.092-0.524-1.168-6.659 0.17-0.309 0.285-0.517h-5.418l0.455 0.827-0.060 0.346-1.2 6.836-0.986 0.44v0.551h9v-0.551z" />
        </G>
      </Svg>
    );
  }

