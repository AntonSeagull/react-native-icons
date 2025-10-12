

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiAnycubic = (props: IconProps) => {

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
          <Path  d="m6.762.534 8.728 3.481 8.469 7.449-6.494-.631L6.762.534Zm10.72 10.463 6.518.581-7.826 8.749-8.649 3.139 9.957-12.469ZM6.592.601l10.699 10.331L7.355 23.44 0 12.465 6.592.601Z" />
        </G>
      </Svg>
    );
  }

