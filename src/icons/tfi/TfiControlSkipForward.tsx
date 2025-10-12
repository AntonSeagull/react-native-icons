

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiControlSkipForward = (props: IconProps) => {

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
          <Path  d="M3 14.571l7.281-6.097-7.281-6.038v12.135zM4 4.564l4.719 3.914-4.719 3.951v-7.865zM14 2v13h-1v-13h1z" />
        </G>
      </Svg>
    );
  }

