

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodCrazyHappy = (props: IconProps) => {

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
          <Path  d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path  d="M7 8.5l3 3" />
          <Path  d="M7 11.5l3 -3" />
          <Path  d="M14 8.5l3 3" />
          <Path  d="M14 11.5l3 -3" />
          <Path  d="M9.5 15a3.5 3.5 0 0 0 5 0" />
        </G>
      </Svg>
    );
  }

