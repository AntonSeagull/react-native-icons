

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbClockPlay = (props: IconProps) => {

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
          <Path  d="M12 7v5l2 2" />
          <Path  d="M17 22l5 -3l-5 -3z" />
          <Path  d="M13.017 20.943a9 9 0 1 1 7.831 -7.292" />
        </G>
      </Svg>
    );
  }

