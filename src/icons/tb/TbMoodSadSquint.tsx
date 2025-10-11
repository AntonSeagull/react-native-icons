

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodSadSquint = (props: IconProps) => {

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
          <Path  d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
          <Path  d="M8.5 11.5l1.5 -1.5l-1.5 -1.5" />
          <Path  d="M15.5 11.5l-1.5 -1.5l1.5 -1.5" />
        </G>
      </Svg>
    );
  }

