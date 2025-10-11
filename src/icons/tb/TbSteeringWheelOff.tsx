

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSteeringWheelOff = (props: IconProps) => {

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
          <Path  d="M20.04 16.048a9 9 0 0 0 -12.083 -12.09m-2.32 1.678a9 9 0 1 0 12.737 12.719" />
          <Path  d="M10.595 10.576a2 2 0 1 0 2.827 2.83" />
          <Path  d="M12 14v7" />
          <Path  d="M10 12l-6.75 -2" />
          <Path  d="M15.542 11.543l5.208 -1.543" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

