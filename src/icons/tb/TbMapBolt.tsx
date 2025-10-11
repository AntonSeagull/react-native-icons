

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMapBolt = (props: IconProps) => {

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
          <Path  d="M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v8.5" />
          <Path  d="M9 4v13" />
          <Path  d="M15 7v7.5" />
          <Path  d="M19 16l-2 3h4l-2 3" />
        </G>
      </Svg>
    );
  }

