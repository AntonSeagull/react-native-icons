

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFileSettings = (props: IconProps) => {

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
          <Path  d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M12 10.5v1.5" />
          <Path  d="M12 16v1.5" />
          <Path  d="M15.031 12.25l-1.299 .75" />
          <Path  d="M10.268 15l-1.3 .75" />
          <Path  d="M15 15.803l-1.285 -.773" />
          <Path  d="M10.285 12.97l-1.285 -.773" />
          <Path  d="M14 3v4a1 1 0 0 0 1 1h4" />
          <Path  d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
        </G>
      </Svg>
    );
  }

