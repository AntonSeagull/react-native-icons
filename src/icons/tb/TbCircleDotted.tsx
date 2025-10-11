

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircleDotted = (props: IconProps) => {

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
          <Path  d="M7.5 4.21l0 .01" />
          <Path  d="M4.21 7.5l0 .01" />
          <Path  d="M3 12l0 .01" />
          <Path  d="M4.21 16.5l0 .01" />
          <Path  d="M7.5 19.79l0 .01" />
          <Path  d="M12 21l0 .01" />
          <Path  d="M16.5 19.79l0 .01" />
          <Path  d="M19.79 16.5l0 .01" />
          <Path  d="M21 12l0 .01" />
          <Path  d="M19.79 7.5l0 .01" />
          <Path  d="M16.5 4.21l0 .01" />
          <Path  d="M12 3l0 .01" />
        </G>
      </Svg>
    );
  }

