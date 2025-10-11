

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWorldWww = (props: IconProps) => {

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
          <Path  d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
          <Path  d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
          <Path  d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
          <Path  d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
          <Path  d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
          <Path  d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
          <Path  d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
          <Path  d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
          <Path  d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
        </G>
      </Svg>
    );
  }

