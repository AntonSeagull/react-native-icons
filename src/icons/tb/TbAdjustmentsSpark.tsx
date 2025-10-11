

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAdjustmentsSpark = (props: IconProps) => {

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
          <Path  d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path  d="M6 4v4" />
          <Path  d="M6 12v8" />
          <Path  d="M13.879 15.312a2 2 0 1 0 -2.26 2.652" />
          <Path  d="M12 4v10" />
          <Path  d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path  d="M18 4v1" />
          <Path  d="M18 9v2.5" />
          <Path  d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
        </G>
      </Svg>
    );
  }

