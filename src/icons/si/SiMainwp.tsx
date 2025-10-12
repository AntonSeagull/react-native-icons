

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiMainwp = (props: IconProps) => {

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
          <Path  d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0m0 2.4004c1.3251 0 2.4004 1.0752 2.4004 2.4004a2.397 2.397 0 0 1-.7031 1.6953 2.4 2.4 0 0 1-.5957.4355L16.08 19.1992 12 21.6016l-4.08-2.4024 2.9784-12.2676a2.4 2.4 0 0 1-.5937-.4355 2.397 2.397 0 0 1-.7031-1.6953c0-1.3252 1.0732-2.4004 2.3984-2.4004" />
        </G>
      </Svg>
    );
  }

