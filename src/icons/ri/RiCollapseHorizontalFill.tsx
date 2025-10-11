

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiCollapseHorizontalFill = (props: IconProps) => {

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
          <Path  d="M13.5 12 18.4497 7.05029 18.4488 11H23V13H18.4483L18.4473 16.9473 13.5 12ZM1 13H5.55013L5.55005 16.9493 10.5 11.9996 5.55025 7.0498 5.55017 11H1V13Z" />
        </G>
      </Svg>
    );
  }

