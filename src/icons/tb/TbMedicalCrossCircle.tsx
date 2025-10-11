

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMedicalCrossCircle = (props: IconProps) => {

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
          <Path  d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <Path  d="M12 8v8" />
          <Path  d="M15.5 10l-7 4" />
          <Path  d="M15.5 14l-7 -4" />
        </G>
      </Svg>
    );
  }

