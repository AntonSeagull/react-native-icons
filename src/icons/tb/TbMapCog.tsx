

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMapCog = (props: IconProps) => {

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
          <Path  d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v8" />
          <Path  d="M9 4v13" />
          <Path  d="M15 7v6.5" />
          <Path  d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M19.001 15.5v1.5" />
          <Path  d="M19.001 21v1.5" />
          <Path  d="M22.032 17.25l-1.299 .75" />
          <Path  d="M17.27 20l-1.3 .75" />
          <Path  d="M15.97 17.25l1.3 .75" />
          <Path  d="M20.733 20l1.3 .75" />
        </G>
      </Svg>
    );
  }

