

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiDropbox = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#444444" d="M4.79 17.467l6.595 4.304 4.616-3.849-6.65-4.104zM11.385 5.865l-6.595 4.301 4.56 3.651 6.65-4.105zM27.21 10.166l-6.595-4.301-4.615 3.848 6.649 4.105zM16 17.922l4.615 3.849 6.595-4.304-4.56-3.65zM16.014 18.75l-4.629 3.839-1.981-1.294v1.451l6.609 3.961 6.609-3.961v-1.451l-1.981 1.294z" />
        </G>
      </Svg>
    );
  }

