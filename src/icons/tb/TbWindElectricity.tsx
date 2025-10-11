

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWindElectricity = (props: IconProps) => {

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
          <Path  d="M20 7l-3 5h4l-3 5" />
          <Path  d="M3 16h4a2 2 0 1 1 0 4" />
          <Path  d="M3 12h8a2 2 0 1 0 0 -4" />
          <Path  d="M3 8h3a2 2 0 1 0 0 -4" />
        </G>
      </Svg>
    );
  }

