

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiFlamer = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M166 121c0 90 90 105 90 180 0 30-30 75-75 75s-75-45-45-120c-45 30-60 60-60 90 0 75 75 150 180 150s180-45 180-135c.67-133.125-153.4-177.596-195-240-30-45-15-75 15-105-60 15-90 57-90 105z" />
        </G>
      </Svg>
    );
  }

